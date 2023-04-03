import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScullyLibModule } from '@scullyio/ng-lib'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { HeaderComponent } from './partials/header/header.component'
import { FooterComponent } from './partials/footer/footer.component'
import { Error404Component } from './errors/error404/error404.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [BrowserModule, AppRoutingModule, ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
