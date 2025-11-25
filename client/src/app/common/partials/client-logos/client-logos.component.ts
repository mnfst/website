import { NgFor } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-client-logos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './client-logos.component.html',
  styleUrls: ['./client-logos.component.scss']
})
export class ClientLogosComponent {
  clientLogos = [
    {
      name: '3M',
      src: './assets/images/user-comps/3m.svg',
      alt: '3M'
    },
    {
      name: 'Algolia',
      src: './assets/images/user-comps/algolia.svg',
      alt: 'Algolia'
    },
    {
      name: 'Alice & Bob',
      src: './assets/images/user-comps/aliceetbob.svg',
      alt: 'Alice & Bob'
    },
    {
      name: 'Automattic',
      src: './assets/images/user-comps/automattic.svg',
      alt: 'Automattic'
    },
    {
      name: 'AWS',
      src: './assets/images/user-comps/aws.svg',
      alt: 'AWS'
    },
    {
      name: 'Booking',
      src: './assets/images/user-comps/booking.svg',
      alt: 'Booking'
    },
    {
      name: 'Capgemini',
      src: './assets/images/user-comps/capgemini.svg',
      alt: 'Capgemini'
    },
    {
      name: 'Doctolib',
      src: './assets/images/user-comps/doctolib.svg',
      alt: 'Doctolib'
    },
    {
      name: 'Epic',
      src: './assets/images/user-comps/epic.svg',
      alt: 'Epic'
    },
    {
      name: 'Grafana',
      src: './assets/images/user-comps/grafana.svg',
      alt: 'Grafana'
    },
    {
      name: 'Hitachi',
      src: './assets/images/user-comps/hitachi.svg',
      alt: 'Hitachi'
    },
    {
      name: 'IKEA',
      src: './assets/images/user-comps/ikea.svg',
      alt: 'IKEA'
    },
    {
      name: 'JPMorgan',
      src: './assets/images/user-comps/jpm.svg',
      alt: 'JPMorgan'
    },
    {
      name: 'Microsoft',
      src: './assets/images/user-comps/microsoft.svg',
      alt: 'Microsoft'
    },
    {
      name: 'Mozilla',
      src: './assets/images/user-comps/mozilla.svg',
      alt: 'Mozilla'
    },
    {
      name: 'Nintendo',
      src: './assets/images/user-comps/nintendo.svg',
      alt: 'Nintendo'
    },
    {
      name: 'Reddit',
      src: './assets/images/user-comps/reddit.svg',
      alt: 'Reddit'
    },
    {
      name: 'Red Hat',
      src: './assets/images/user-comps/redhat.svg',
      alt: 'Red Hat'
    },
    {
      name: 'Sanofi',
      src: './assets/images/user-comps/sanofi.svg',
      alt: 'Sanofi'
    },
    {
      name: 'SAP',
      src: './assets/images/user-comps/sap.svg',
      alt: 'SAP'
    },
    {
      name: 'Southwest Airlines',
      src: './assets/images/user-comps/southwest-airlines.svg',
      alt: 'Southwest Airlines'
    }
  ]
}
