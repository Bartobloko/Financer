import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email:new FormControl('', [ Validators.required, Validators.minLength(4) ]),
      password:new FormControl('', [ Validators.required, Validators.minLength(7) ]),
    })
  }

  login() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe()
  }

}
