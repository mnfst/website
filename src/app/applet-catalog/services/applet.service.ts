import { Injectable } from '@angular/core'
import CaseClient from '@casejs/case-client'
import { Applet } from '../../../../case/entities/applet.entity'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppletService {
  cs: CaseClient

  constructor() {
    this.cs = new CaseClient(environment.apiURL)
  }

  list(): Promise<Applet[]> {
    return this.cs.from('applets').find<Applet>()
  }

  show(slug: string): Promise<Applet> {
    return this.cs
      .from('applets')
      .where(`slug = ${slug}`)
      .find<Applet>()
      .then((applets: Applet[]) => {
        return applets?.[0]
      })
  }
}
