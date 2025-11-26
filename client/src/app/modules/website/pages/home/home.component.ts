import { NgFor, NgIf } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import {
  Component,
  DOCUMENT,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { environment } from '../../../../../environments/environment'
import { McpHeroComponent } from './elements/mcp-hero/mcp-hero.component'
import { SurveyModalComponent } from './elements/survey-modal/survey-modal.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    SurveyModalComponent,
    McpHeroComponent,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('promptInput', { static: false })
  promptInput?: ElementRef<HTMLTextAreaElement>

  suggestions: string[] = [
    'CRM to track leads and deals',
    'Task tracker with team assignments',
    'Internal dashboard for sales metrics',
    'Contact form API',
    'Customer support ticket system',
    'Backend of a dating app',
    'Inventory management tool'
  ]

  featuresA = ['Ship insanely fast']
  featuresB = [
    'Easy to validate',
    'Minimal token usage',
    'YAML OpenAPI spec',
    'TypeScript types'
  ]
  featuresC = ['Integrates anywhere']

  images = [
    './assets/images/example-yaml-code.svg',
    './assets/images/admin-login.svg',
    './assets/images/admin.svg',
    './assets/images/doc-api.svg'
  ]

  partnerLogos = [
    {
      name: 'logo-skydeck',
      src: './assets/images/logo-skydeck.svg',
      alt: 'logo-skydeck'
    },
    {
      name: 'Inria',
      src: './assets/images/inria-logo.svg',
      alt: 'inria'
    },
    {
      name: 'hec',
      src: './assets/images/hec-incubateur.svg',
      alt: 'hec'
    }
  ]

  isSurveyModalVisible = false
  form: FormGroup
  loading: boolean = false

  swapIndex = 0
  private autoSwapInterval: any

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      prompt: new FormControl('', Validators.required)
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.promptInput?.nativeElement) {
        this.promptInput.nativeElement.focus()
      }
    }, 0)
  }

  ngOnDestroy() {
    clearInterval(this.autoSwapInterval)
  }

  private startAutoSwap() {
    clearInterval(this.autoSwapInterval)
    this.autoSwapInterval = setInterval(() => {
      this.swapImages(false)
    }, 3000)
  }

  swapImages(manual = true) {
    this.swapIndex = (this.swapIndex + 1) % this.images.length
    if (manual) this.startAutoSwap()
  }

  get orderedImages() {
    return [0, 1, 2, 3].map((offset) => {
      const realIndex = (this.swapIndex + offset) % this.images.length

      let imageClass = ''
      if (offset === 0) imageClass = 'image-stack--front'
      else if (offset === 1) imageClass = 'image-stack--second'
      else if (offset === 2) imageClass = 'image-stack--third'
      else imageClass = 'image-stack--back'

      return {
        src: this.images[realIndex],
        class: imageClass
      }
    })
  }

  chooseSuggestion(suggestion: string) {
    this.form.patchValue({ prompt: suggestion })
    setTimeout(() => {
      this.showSurveyModal()
    }, 200)
  }

  showSurveyModal() {
    this.isSurveyModalVisible = true
  }

  onClose(formData: { name: string; email: string } | null) {
    this.isSurveyModalVisible = false
    if (!formData) {
      return
    }

    this.loading = true
    this.http
      .post<{ id: number }>(`${environment.cloudApiUrl}/projects`, {
        creatorName: formData.name,
        creatorEmail: formData.email,
        initialPrompt: this.form.value.prompt
      })
      .subscribe({
        next: (response: { id: number }) => {
          this.loading = false
          const params = new URLSearchParams({
            prompt: this.promptInput?.nativeElement?.value || '',
            p: response.id.toString()
          })

          this.document.location.href = `${
            environment.vibeCodingToolUrl
          }?${params.toString()}`
        },
        error: (error) => {
          this.loading = false
          console.error('Error creating project', error)
          alert(
            'There was an error creating your project. Please try again later.'
          )
        }
      })
  }
}
