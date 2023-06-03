import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showNewPassword = false;
  signInFormgroup!: FormGroup;

  constructor(
    private authService: AuthService,
    private titleService: Title,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signInFormgroup = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  login() {
    this.authService.login();
  }

  get f() {
    return this.signInFormgroup.controls;
  }
}
