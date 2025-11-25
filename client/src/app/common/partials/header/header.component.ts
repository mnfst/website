// src/app/common/partials/header/header.component.ts
import { Component, Renderer2 } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private static scriptInjected = false

  constructor(private renderer: Renderer2) {}

  onGetDemo(): void {
    window.open('https://calendly.com/sebastien-manifest/30min', '_blank')
  }
}
