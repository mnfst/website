import { Component, OnInit } from '@angular/core'
import { Applet } from '../../../../../../case/entities/applet.entity'
import { AppletService } from '../../../services/applet.service'

@Component({
  selector: 'app-applet-list',
  templateUrl: './applet-list.component.html',
  styleUrl: './applet-list.component.scss'
})
export class AppletListComponent implements OnInit {
  applets: Applet[]

  constructor(private appletService: AppletService) {}

  ngOnInit(): void {
    this.appletService.list().then((applets: Applet[]) => {
      this.applets = applets
    })
  }
}
