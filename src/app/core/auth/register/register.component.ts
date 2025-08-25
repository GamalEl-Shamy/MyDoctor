import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  msg: string = "";
  isLoading: boolean = false;

  registerForm: FormGroup = new FormGroup({
    fName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
    lName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
    nationalID: new FormGroup({
      number: new FormControl(null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)])
    }),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    gender: new FormControl(null, [Validators.required]),
    address: new FormGroup({
      city: new FormControl(null, [Validators.required]),
      town: new FormControl(null, [Validators.required])
    })

  })

  submitForm(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.authService.registerForm(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message == "success") {
            this.router.navigate(['/home'])
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.msg = err.error.error;
          this.isLoading = false;
        }
      })
    }

  }
}
