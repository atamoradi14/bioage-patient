import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginSub = new BehaviorSubject<boolean>(false);
  loginChanged$ = this.loginSub.asObservable();
  private isLogin = false;
  private user = {
    id: '00001',
    firstName: 'John',
    lastName: 'Smith',
    displayName: "John Smith",
    email: 'john.smith@bioage.com',
    refNo: 'RD12345',
    phone: '0211234567',
    country: 'US',
  } as UserModel;
  constructor(private router: Router) {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.isLogin = true;
      this.loginSub.next(true);
    }
  }

  getUser() {
    if (!this.isLogin) {
      return null;
    }
    return this.user;
  }
  login() {
    this.isLogin = true;
    this.loginSub.next(true);
    localStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('user');
    this.isLogin = false;
    this.loginSub.next(false);
    this.router.navigate(['auth']);
  }
}
