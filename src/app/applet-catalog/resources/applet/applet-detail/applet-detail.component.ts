import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Applet } from '../../../../../../case/entities/applet.entity'
import { environment } from '../../../../../environments/environment'
import { AppletService } from '../../../services/applet.service'

@Component({
  selector: 'app-applet-detail',
  templateUrl: './applet-detail.component.html',
  styleUrl: './applet-detail.component.scss'
})
export class AppletDetailComponent {
  applet: Applet
  storagePath: string = environment.apiURL + '/storage'

  constructor(
    private activatedRoute: ActivatedRoute,
    private appletService: AppletService
  ) {}

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      this.applet = await this.appletService.show(params['slug'])
    })
  }
}
