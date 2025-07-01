import { CommonModule, NgFor, NgIf } from '@angular/common'
import { Component } from '@angular/core'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'
import { Integration } from '../../../../../types/integration.interface'

@Component({
  selector: 'app-integration-detail',
  imports: [NgIf, NgFor, RouterLink, CommonModule],
  templateUrl: './integration-detail.component.html',
  styleUrl: './integration-detail.component.scss'
})
export class IntegrationDetailComponent {
  integration: Integration | undefined
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.integration = data['integration']
      if (!this.integration) {
        this.router.navigate(['/404'])
      }
    })
  }
}
