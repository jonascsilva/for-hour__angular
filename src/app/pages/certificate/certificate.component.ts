import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CertificatesService } from '../../services/certificates.service';
import { Certificate } from '../../interfaces/certificate.interface';
import { Student } from '../../interfaces/student.interface';
import { FilterTargetModule } from '../../pipes/filter-target';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
  standalone: true,
  imports: [CommonModule, NgFor, FilterTargetModule, HttpClientModule],
})
export class CertificateComponent implements OnInit {
  studentId!: string | null;

  certificates!: Certificate[];
  student!: Student;

  back() {
    window.history.back();
  }

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _certificateService: CertificatesService
  ) {}

  ngOnInit() {
    this.studentId = this._route.snapshot.paramMap.get('id') as string;

    this._certificateService
      .getAllByStudent(this.studentId)
      .subscribe(
        (result: { certificates: Certificate[]; student: Student }) => {
          this.certificates = result.certificates.filter((certificate) => {
            if (certificate?.isValidated || certificate.isValidated === true) {
              console.log(certificate);
              return [];
            }
            return certificate;
          });
          this.student = result.student;
        }
      );
  }

  onValidCertificate(student: Student, certificate: Certificate): void {
    this._certificateService
      .updateStatusCertificate(student, certificate)
      .then((_) => {
        this.certificates = [
          ...this.certificates.filter((_) => _.id !== certificate.id),
        ];
      });
  }

  onValidAllCertificate(student: Student, certificates: Certificate[]) {
    certificates.forEach((certificate) => {
      this._certificateService
        .updateStatusCertificate(student, certificate)
        .then((_) => (this.certificates = []));
    });
  }

  onDownloadCertificate(certificate: Certificate) {
    this._certificateService.downloadCertificate(certificate, this.student);
  }
}
