import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppletDetailComponent } from './resources/applet/applet-detail/applet-detail.component'
import { AppletListComponent } from './resources/applet/applet-list/applet-list.component'
const routes: Routes = [
  {
    path: '',
    component: AppletListComponent
  },
  {
    path: ':slug',
    component: AppletDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppletCatalogRoutingModule {}
