import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PipelineData } from '../models/widget.models'

@Component({
  selector: 'app-pipeline-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipeline-widget.component.html',
  styleUrl: './pipeline-widget.component.scss'
})
export class PipelineWidgetComponent {
  @Input() data!: PipelineData
  @Input() theme: 'dark' | 'light' = 'dark'

  isActive(stageId: string): boolean {
    return this.data.activeStage === stageId
  }

  getStageClass(stage: { variant?: string }): string {
    const base = 'pipeline__stage'
    const variant = stage.variant || 'default'
    return `${base} ${base}--${variant}`
  }
}
