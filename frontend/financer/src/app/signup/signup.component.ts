import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {AuthService} from "../shared/services/auth.service";
import {MatCard} from "@angular/material/card";
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatCard,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      name:new FormControl('', [ Validators.required, Validators.minLength(4) ]),
      email:new FormControl('', [ Validators.required, Validators.email ]),
      password:new FormControl('', [ Validators.required, Validators.minLength(7) ]),
    })
  }

  signup() {
    this.authService.signup(this.signupForm.value).subscribe((msg) => {
      console.log(msg)
    })
  }


}
