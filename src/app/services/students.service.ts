import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private db: AngularFirestore) {}

  getListStudents(): Observable<any> {
    return this.db.collection('users').valueChanges({idField: 'id'}).pipe();
  }

}
