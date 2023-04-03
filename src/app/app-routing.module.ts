import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    // Pages.
    {
      path: '',
      component: HomeComponent
    },
    {
      path: '404',
      component: Error404Component
    },
    {
      path: '**',
      redirectTo: '/404'
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
