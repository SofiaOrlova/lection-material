import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { Observable, of } from "rxjs";
import {LoginModel} from "./models/login.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthorized: boolean = false;

  public get isAuthorized(): boolean {
    return this._isAuthorized;
  }

  private set isAuthorized(value: boolean) {
    this._isAuthorized = value;
    this.router.navigate([this.isAuthorized ? '/page-1' : '/auth/login']);
  }

  constructor(
    private router: Router
  ) {
  }

  public login(model: LoginModel): Observable<boolean> {
    let result: boolean = false;
    if(model.email == 'test@email' && model.password == 'password1') {
      result = true;
    }
    this.isAuthorized = result;
    return of(result);
  }

  public logout(): void {
    this.isAuthorized = false;
  }
  
}
