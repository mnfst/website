import { NgClass, NgFor, NgIf } from '@angular/common'
import {
  Component,
  DOCUMENT,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core'
import { WaitingListFormComponent } from '../../../../common/partials/waiting-list-form/waiting-list-form.component'
import { LiveCodeHeroComponent } from './elements/live-code-hero/live-code-hero.component'
import { CopyButtonComponent } from './elements/onboarding-showcase/copy-to-clipboard.component'
import { SurveyModalComponent } from './elements/survey-modal/survey-modal.component'
import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgClass,
    WaitingListFormComponent,
    CopyButtonComponent,
    LiveCodeHeroComponent,
    SurveyModalComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('promptInput') promptInput: ElementRef<HTMLTextAreaElement>

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
  isSurveyModalVisible = false

  swapIndex = 0
  private autoSwapInterval: any

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    // if (isPlatformBrowser(this.platformId)) {
    //   this.startAutoSwap()
    // }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.promptInput.nativeElement.focus()
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

  showSurveyModal() {
    console.log('Showing survey modal')
    this.isSurveyModalVisible = true
  }

  onClose(isSurveySubmitted: boolean) {
    this.isSurveyModalVisible = false
    if (isSurveySubmitted) {
      const params = new URLSearchParams({
        prompt: this.promptInput.nativeElement.value
      })

      this.document.location.href = `${environment.vibeCodingToolUrl}?${params}`
    } else {
      console.log('Survey modal was closed without submission')
    }
  }
}
