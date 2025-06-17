import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from './common/partials/footer/footer.component'
import { HeaderComponent } from './common/partials/header/header.component'
import { SeoService } from './common/services/seo.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.init()
  }
}
