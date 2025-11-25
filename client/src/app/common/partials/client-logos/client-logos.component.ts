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
      name: 'Google',
      src: './assets/images/clients/google.svg',
      alt: 'Google'
    },
    {
      name: 'Microsoft',
      src: './assets/images/clients/microsoft.svg',
      alt: 'Microsoft'
    },
    {
      name: 'Amazon',
      src: './assets/images/clients/amazon.svg',
      alt: 'Amazon'
    },
    {
      name: 'Meta',
      src: './assets/images/clients/meta.svg',
      alt: 'Meta'
    },
    {
      name: 'Apple',
      src: './assets/images/clients/apple.svg',
      alt: 'Apple'
    },
    {
      name: 'Netflix',
      src: './assets/images/clients/netflix.svg',
      alt: 'Netflix'
    },
    {
      name: 'Spotify',
      src: './assets/images/clients/spotify.svg',
      alt: 'Spotify'
    },
    {
      name: 'Airbnb',
      src: './assets/images/clients/airbnb.svg',
      alt: 'Airbnb'
    }
  ]
}