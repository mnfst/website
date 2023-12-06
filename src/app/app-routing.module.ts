import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { Error404Component } from './errors/error404/error404.component'
import { FaqComponent } from './pages/faq/faq.component'
import { HomeComponent } from './pages/home/home.component'
import { IntegrationComponent } from './pages/integration/integration.component'

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
    path: 'backend-for-react',
    component: IntegrationComponent,
    data: {
      framework: 'react'
    }
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
