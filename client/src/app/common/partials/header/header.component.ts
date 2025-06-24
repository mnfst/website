// src/app/common/partials/header/header.component.ts
import { AfterViewInit, Component, Renderer2 } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // <— note le “s” !
})
export class HeaderComponent implements AfterViewInit {
  // garde en mémoire si on a déjà injecté le script
  private static scriptInjected = false

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // côté serveur, on sort immédiatement
    if (typeof window === 'undefined') {
      return
    }

    const win = window as any

    // si le script n'est pas encore injecté, on l'ajoute
    if (!HeaderComponent.scriptInjected && !win.GitHubButton) {
      const s = this.renderer.createElement('script')
      s.src = 'https://buttons.github.io/buttons.js'
      s.async = true
      s.defer = true
      s.onload = () => win.GitHubButton.render() // une fois chargé, on render
      this.renderer.appendChild(document.body, s)
      HeaderComponent.scriptInjected = true
    } else if (win.GitHubButton?.render) {
      // si le script est déjà là, on force le “scan” pour notre nouveau <a>
      win.GitHubButton.render()
    }
  }
}
