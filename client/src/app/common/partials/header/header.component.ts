// src/app/common/partials/header/header.component.ts
import { AfterViewInit, Component, Renderer2 } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  private static scriptInjected = false

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // if (typeof window === 'undefined') {
    //   return
    // }
    // const win = window as any
    // const renderButtons = () => {
    //   if (win.GitHubButton?.render) {
    //     win.GitHubButton.render()
    //   }
    // }
    // if (!HeaderComponent.scriptInjected) {
    //   const s = this.renderer.createElement('script')
    //   s.src = 'https://buttons.github.io/buttons.js'
    //   s.async = true
    //   s.defer = true
    //   s.onload = () => renderButtons()
    //   this.renderer.appendChild(document.body, s)
    //   HeaderComponent.scriptInjected = true
    // } else {
    //   renderButtons()
    // }
  }
}
