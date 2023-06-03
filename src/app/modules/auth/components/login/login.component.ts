import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private titleService: Title) {}
  login() {
    this.authService.login();
  }
}
