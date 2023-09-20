import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'
import { Error404Component } from './errors/error404/error404.component'
import { FaqComponent } from './pages/faq/faq.component'
import { HomeComponent } from './pages/home/home.component'
import { FooterComponent } from './partials/footer/footer.component'
import { HeaderComponent } from './partials/header/header.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        Error404Component,
        FaqComponent
      ]
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
