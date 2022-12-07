import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { BehaviorSubject, Observable } from "rxjs";
import IUsuario from "../interfaces/usuario.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  userData$!: Observable<IUsuario | any>

  constructor(private angularFireAuth: AngularFireAuth) {
      this.userData$ = angularFireAuth.authState;
      if (localStorage.getItem('user')) this._isLoggedIn$.next(true);
  }


  login(email: string, password: string): Promise<any> {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password).then((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      this._isLoggedIn$.next(true);
    });
  }

}
