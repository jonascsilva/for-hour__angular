import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable } from "rxjs";
import IUsuario from "../interfaces/usuario.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData$!: Observable<IUsuario | any>

  constructor(private angularFireAuth: AngularFireAuth) {
      this.userData$ = angularFireAuth.authState;
  }


  login(email: string, password: string): Promise<any> {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password).then((user) => {
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

}
