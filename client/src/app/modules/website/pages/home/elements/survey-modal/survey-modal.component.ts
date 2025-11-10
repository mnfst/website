import { HttpClient } from '@angular/common/http'
import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { environment } from '../../../../../../../environments/environment'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-survey-modal',
  imports: [],
  templateUrl: './survey-modal.component.html',
  styleUrl: './survey-modal.component.scss'
})
export class SurveyModalComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>()

  form: FormGroup
  loading = false

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      /* TODO: form controls */
    })
  }

  onClose() {
    this.close.emit(false /* Indicate modal is closed */)
  }

  submit() {
    this.loading = true
    this.http
      .post(`${environment.apiSurveyUrl}/survey`, this.form.value)
      .subscribe({
        complete: () => {
          this.loading = false
          this.close.emit(true /* Indicate modal is closed after submission */)
        },
        error: (error) => {
          this.loading = false
          // Handle error (e.g., show a notification)
          console.error('Survey submission failed', error)
          this.close.emit(true /* Indicate modal is closed despite error */)
        }
      })
  }
}
