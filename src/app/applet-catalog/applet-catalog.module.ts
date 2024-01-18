import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AppletCatalogRoutingModule } from './applet-catalog.routes'
import { AppletDetailComponent } from './resources/applet/applet-detail/applet-detail.component'
import { AppletListComponent } from './resources/applet/applet-list/applet-list.component'

@NgModule({
  declarations: [AppletDetailComponent, AppletListComponent],
  imports: [CommonModule, AppletCatalogRoutingModule]
})
export class AppletCatalogModule {}
