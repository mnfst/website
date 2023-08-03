import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { Error404Component } from './errors/error404/error404.component'
import { HomeComponent } from './pages/home/home.component'
import { FaqComponent } from './pages/faq/faq.component'

const routes: Routes = [
  // Pages.
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '/404'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
