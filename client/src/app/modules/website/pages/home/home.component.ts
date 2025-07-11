import { isPlatformBrowser, NgClass, NgFor } from '@angular/common'
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID
} from '@angular/core'
import { WaitingListFormComponent } from '../../../../common/partials/waiting-list-form/waiting-list-form.component'
import { CopyButtonComponent } from './elements/onboarding-showcase/copy-to-clipboard.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgClass, WaitingListFormComponent, CopyButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  featuresA = ['Easy to validate', 'Secure by default', 'Ship insanely fast']
  featuresB = [
    'Integrated: No need for third-party service',
    'OpenAPI doc and types generation',
    'Minimal token usage'
  ]
  featuresC = [
    'Zero-config',
    'ready in seconds',
    'Manage multiple instances with ease'
  ]

  images = [
    './assets/images/example-yaml-code.svg',
    './assets/images/admin-login.svg',
    './assets/images/admin.svg',
    './assets/images/doc-api.svg'
  ]

  swapIndex = 0
  private autoSwapInterval: any

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSwap()
    }
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
}
