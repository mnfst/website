import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { Error404Component } from './errors/error404/error404.component'
import { FaqComponent } from './pages/faq/faq.component'
import { HomeComponent } from './pages/home/home.component'
import { FooterComponent } from './partials/footer/footer.component'
import { HeaderComponent } from './partials/header/header.component'
import { LiveCodeHeroComponent } from './partials/live-code-hero/live-code-hero.component';
import { AdminPanelHeroComponent } from './partials/admin-panel-hero/admin-panel-hero.component';
import { ApiHeroComponent } from './partials/api-hero/api-hero.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    FaqComponent,
    LiveCodeHeroComponent,
    AdminPanelHeroComponent,
    ApiHeroComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
