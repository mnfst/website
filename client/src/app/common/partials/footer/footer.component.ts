import { Component } from '@angular/core'
import { CopyButtonComponent } from '../../../modules/website/pages/home/elements/onboarding-showcase/copy-to-clipboard.component'
import { WaitingListFormComponent } from '../waiting-list-form/waiting-list-form.component'

@Component({
  selector: 'app-footer',
  imports: [WaitingListFormComponent, CopyButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {}
