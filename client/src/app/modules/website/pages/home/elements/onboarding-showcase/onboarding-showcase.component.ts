import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common'
import { Component, ElementRef, ViewChild } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ProjectService } from '../../../../services/project.service'
import { Message } from './types/message.interface'
import { Highlight } from 'ngx-highlightjs'
import { DeployService } from '../../../../services/deploy.service'
import { CopyButtonComponent } from './copy-to-clipboard.component'

@Component({
  selector: 'app-onboarding-showcase',
  imports: [
    NgIf,
    ReactiveFormsModule,
    DatePipe,
    NgClass,
    NgFor,
    Highlight,
    CopyButtonComponent
  ],
  templateUrl: './onboarding-showcase.component.html',
  styleUrl: './onboarding-showcase.component.scss'
})
export class OnboardingShowcaseComponent {
  @ViewChild('promptInput') promptInput!: ElementRef

  form: FormGroup = new FormGroup({
    prompt: new FormControl('')
  })

  loading: boolean = false
  isPromptEmpty: boolean = true
  backendFileContent: string
  cloudInstanceUrl: string
  projectName: string
  backendFilePath: string

  messages: Message[] = []

  constructor(
    private projectService: ProjectService,
    private deployService: DeployService
  ) {}

  ngAfterViewInit(): void {
    this.promptInput.nativeElement.focus()

    this.form.valueChanges.subscribe((value) => {
      this.isPromptEmpty = value.prompt === ''
    })

    this.promptInput.nativeElement.addEventListener(
      'keydown',
      (event: KeyboardEvent) => {
        if (event.key === 'Enter' && !this.isPromptEmpty) {
          this.submitPrompt(this.form.get('prompt')?.value)
        }
      }
    )
  }

  /**
   * Submit the user prompt to the LLM and get the response with text and backend file.
   *
   * @param prompt The user prompt to be submitted.
   */
  async submitPrompt(prompt: string): Promise<void> {
    this.messages.push({
      content: prompt,
      author: 'user',
      time: new Date().toISOString()
    })

    this.loading = true

    // First interaction with the LLM: create the project.
    if (this.messages.length === 1) {
      await this.projectService
        .create(prompt)
        .then(
          (res: {
            initialResponse: string
            initialBackendFileContent: string
            name: string
            backendFilePath: string
            id: number
          }) => {
            this.form.reset()
            this.loading = false

            this.backendFilePath = res.backendFilePath
            this.projectName = res.name

            // Publish the LLM response and backend file.
            this.messages.push({
              content: res.initialResponse,
              author: 'assistant',
              time: new Date().toISOString()
            })
            this.messages.push({
              content: res.initialBackendFileContent,
              author: 'assistant',
              isBackendFile: true,
              time: new Date().toISOString()
            })

            this.deploy(res.id)
          }
        )
        .catch((err) => {
          console.error(err)
          this.loading = false
        })
    } else {
      this.loading = false
      alert('No updates yet')
    }
  }

  async deploy(projectId: number): Promise<void> {
    this.messages.push({
      content: 'I will now deploy your project to the cloud.',
      author: 'assistant',
      time: new Date().toISOString()
    })
    this.loading = true

    this.cloudInstanceUrl = await this.deployService
      .deployBackend(projectId)
      .catch((err) => {
        console.error(err)
        this.loading = false
        this.messages.push({
          author: 'assistant',
          time: new Date().toISOString(),
          content:
            'Oops, error deploying code ! It can happen sometimes as this is a PoC. You can try to reload this page and try again.'
        })
        return ''
      })

    this.loading = false
  }
}
