import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-survey-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './survey-modal.component.html',
  styleUrl: './survey-modal.component.scss'
})
export class SurveyModalComponent implements OnInit {
  @Output() close: EventEmitter<{ name: string; email: string }> =
    new EventEmitter<{ name: string; email: string }>()

  form: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  onClose() {
    this.close.emit(null)
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    this.close.emit(this.form.value)
  }
}
