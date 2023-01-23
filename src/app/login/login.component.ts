import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {


  }
  login() {
    if (this.emailFormControl.invalid || this.passwordFormControl.invalid || this.emailFormControl.value == null || this.passwordFormControl.value == null) {

      return;
    }
    this.loginService.login(this.emailFormControl.value, this.passwordFormControl.value);
  }
  submit() {
    this.login();
  }
}
