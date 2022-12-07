import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, mergeMap, Observable, take } from 'rxjs';
import { Certificate } from '../interfaces/certificate.interface';
import { Student } from '../interfaces/student.interface';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class CertificatesService {
  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

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

  updateStatusCertificate(
    student: Student,
    certificate: Certificate
  ): Promise<any> {
    return this.db
      .collection('users')
      .doc(student.id)
      .collection('certificates')
      .doc(certificate.id)
      .update({ isValidated: true });
  }

  rejectStatusCertificate(
    student: Student,
    certificate: Certificate
  ): Promise<any> {
    return this.db
      .collection('users')
      .doc(student.id)
      .collection('certificates')
      .doc(certificate.id)
      .update({ isValidated: false });
  }

  downloadCertificate(certificate: Certificate, student: Student) {
    return this.storage
      .ref(`users/${student.id}/${certificate.id}.pdf`)
      .getDownloadURL()
      .subscribe((url) => {
        window.open(url);
      });
  }
}
