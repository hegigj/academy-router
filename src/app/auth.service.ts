import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
}

const IS_AUTHENTICATED = 'todolist:isAuthenticated';

@Injectable()
export class AuthService {
  private _isAuthenticated: boolean;
  private _userRole: string;

  constructor() {
    const isAuthenticated: boolean = JSON.parse(localStorage.getItem(IS_AUTHENTICATED) || 'false ');
    this._isAuthenticated = isAuthenticated;
    this._userRole = 'SIMPLE_USER';
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  get userRole(): string {
    return this._userRole;
  }

  authUser(user: User): boolean {
    const { username, password } = user;

    if (username === 'hgjoka' && password === '123') {
      this._isAuthenticated = true;
      localStorage.setItem(IS_AUTHENTICATED, JSON.stringify(this._isAuthenticated));
      return true;
    }

    return false;
  }
}
