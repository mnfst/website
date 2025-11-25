import { Component } from '@angular/core'
import { WaitingListFormComponent } from '../waiting-list-form/waiting-list-form.component'

@Component({
  selector: 'app-footer',
  imports: [WaitingListFormComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  onGetDemo(): void {
    window.open('https://calendly.com/sebastien-manifest/30min', '_blank')
  }
}
