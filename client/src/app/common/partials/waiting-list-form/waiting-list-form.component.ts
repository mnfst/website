import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { environment } from '../../../../environments/environment'
import { firstValueFrom } from 'rxjs'

@Component({
  selector: 'app-waiting-list-form',
  imports: [ReactiveFormsModule],
  templateUrl: './waiting-list-form.component.html',
  styleUrl: './waiting-list-form.component.scss'
})
export class WaitingListFormComponent {
  form: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      return
    }
    firstValueFrom(
      this.http.post(
        `${environment.websiteApiUrl}/api/collections/waiting-users`,
        this.form.value
      )
    )
      .then(() => {
        this.form.reset()
        alert('Thanks for signing up! We will let you know when we launch.')
      })
      .catch((error) => {
        console.error('Error submitting form', error)
        alert('There was an error submitting the form. Please try again later.')
      })
  }
}
