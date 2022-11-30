import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, mergeMap, Observable, take } from 'rxjs';
import { Certificate } from '../interfaces/certificate.interface';
import firebase from 'firebase/compat';
import { Student } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root',
})
export class CertificatesService {
  constructor(private db: AngularFirestore) {}

  getAllByStudent(studentId: string): Observable<any> {
    const collectionRef = this.db.collection('users').doc(studentId);

    return collectionRef
      .collection('certificates')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((certificates, index) => {
          return {
            certificates: certificates.map((certificate) => certificate),
          };
        }),
        take(1),
        mergeMap((certificates) =>
          collectionRef.valueChanges({ idField: 'id' }).pipe(
            take(1),
            map((student) => {
              return { ...certificates, student };
            })
          )
        )
      );
  }

  updateStatusCertificate(student: Student, certificate: Certificate): Promise<any> {
    return this.db.collection('users').doc(student.id)
      .collection('certificates')
      .doc(certificate.id)
      .update({isValidated: true})
  }
}
