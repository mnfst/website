import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  DeploymentTimelineData,
  DeploymentItem,
  DeploymentError
} from '../models/widget.models'

@Component({
  selector: 'app-deployment-timeline-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deployment-timeline-widget.component.html',
  styleUrl: './deployment-timeline-widget.component.scss'
})
export class DeploymentTimelineWidgetComponent {
  @Input() data!: DeploymentTimelineData
  @Input() theme: 'dark' | 'light' = 'light'

  expandedDeployments: Set<string> = new Set()

  toggleDeployment(id: string): void {
    if (this.expandedDeployments.has(id)) {
      this.expandedDeployments.delete(id)
    } else {
      this.expandedDeployments.add(id)
    }
  }

  isExpanded(id: string): boolean {
    return this.expandedDeployments.has(id)
  }

  getStatusClass(status: DeploymentItem['status']): string {
    return `deployment-timeline__status--${status}`
  }

  getSeverityClass(severity: DeploymentError['severity']): string {
    return `deployment-timeline__error--${severity}`
  }

  getStatusIcon(status: DeploymentItem['status']): string {
    switch (status) {
      case 'success':
        return '✓'
      case 'failed':
        return '✕'
      case 'rolling-back':
        return '↺'
      default:
        return '•'
    }
  }
}
