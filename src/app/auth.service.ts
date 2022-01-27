import { Injectable } from '@angular/core';

export enum UserRole {
  ADMIN,
  SIMPLE
}

interface User {
  username: string;
  password: string;
}

const IS_AUTHENTICATED = 'todolist:isAuthenticated';

@Injectable()
export class AuthService {
  private _isAuthenticated: boolean;
  private _userRole: UserRole;

  constructor() {
    const isAuthenticated: boolean = JSON.parse(sessionStorage.getItem(IS_AUTHENTICATED) || 'false ');
    this._isAuthenticated = isAuthenticated;
    this._userRole = UserRole.SIMPLE;
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  get userRole(): UserRole {
    return this._userRole;
  }

  authUser(user: User): boolean {
    const { username, password } = user;

    if (username === 'hgjoka' && password === '123') {
      this._isAuthenticated = true;
      sessionStorage.setItem(IS_AUTHENTICATED, JSON.stringify(this._isAuthenticated));
      return true;
    }

    return false;
  }
}
