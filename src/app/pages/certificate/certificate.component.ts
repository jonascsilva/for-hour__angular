import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CertificatesService } from '../../services/certificates.service';
import { Certificate } from '../../interfaces/certificate.interface';
import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'app-login',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
  standalone: true,
  imports: [CommonModule, NgFor],
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
          this.certificates = result.certificates;
          this.student = result.student;
        }
      );
  }
}
