import { Component, ElementRef, HostListener, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentPath: string
  isDemoMenuOpen = false

  constructor(private router: Router, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.router.events.subscribe((routeChanged) => {
      if (routeChanged instanceof NavigationEnd) {
        this.currentPath = routeChanged.url
      }
    })
  }

  @HostListener('document:click', ['$event.target'])
  clickOut(eventTarget: HTMLElement) {
    if (!this.elementRef.nativeElement.contains(eventTarget)) {
      this.isDemoMenuOpen = false
    }
  }
}
