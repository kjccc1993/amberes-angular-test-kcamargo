import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';

import { LoginService } from './login.service';
import { ToastService } from '../shared/toaster/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    public toasterService: ToastService,
    public loginService: LoginService,
    private router: Router
  ) {}

  faUser = faUser;
  faKey = faKey;
  emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  loading = false;

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  loginForm = new FormBuilder().group({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    let cred = {
      email: this.loginForm.value.email,
      password: Md5.hashStr(this.loginForm.value.password),
    };
    this.loading = true;
    this.loginService
      .loginByEmail(cred)
      .then((resp) => {
        this.router.navigateByUrl('/home');
      })
      .catch((err) => {
        this.toasterService.show(err.message, {
          type: 'error',
          delay: 4000,
        });
      })
      .finally(() => (this.loading = false));
  }

  forgotPassword() {
    this.toasterService.show('We are working on it', {
      type: 'info',
      delay: 4000,
    });
  }
}
