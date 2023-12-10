import { NgModule } from '@angular/core'
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { Error404Component } from './errors/error404/error404.component'
import { FaqComponent } from './pages/faq/faq.component'
import { HomeComponent } from './pages/home/home.component'
import { FooterComponent } from './partials/footer/footer.component'
import { HeaderComponent } from './partials/header/header.component'
import { LiveCodeHeroComponent } from './partials/live-code-hero/live-code-hero.component';
import { AdminPanelHeroComponent } from './partials/admin-panel-hero/admin-panel-hero.component';
import { ApiHeroComponent } from './partials/api-hero/api-hero.component';
import { SdkFeaturesComponent } from './partials/sdk-features/sdk-features.component';
import { IntegrationComponent } from './pages/integration/integration.component'

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
    ApiHeroComponent,
    SdkFeaturesComponent,
    IntegrationComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
