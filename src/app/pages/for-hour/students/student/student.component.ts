import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { Student } from '../../../../interfaces/student.interface';
import { CertificatesService } from 'src/app/services/certificates.service';
import { map } from 'rxjs';
import { Certificate } from 'src/app/interfaces/certificate.interface';

type CertificateResponse = {
  student: Student;
  certificates: Certificate[];
};

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
})
export class StudentComponent implements OnInit {
  @Input() student!: Student;

  // define algumas estruturas do css
  // index  do array
  @Input() index!: number;

  public validatedHours: number = 0;

  constructor(private certificateService: CertificatesService) {}

  ngOnInit(): void {
    this.certificateService
      .getAllByStudent(this.student.id)
      .pipe(
        map((response: CertificateResponse) =>
          response.certificates.filter(
            (_: Certificate) => _?.isValidated === true
          )
        )
      )
      .subscribe(
        (certificates) =>
          (this.validatedHours = certificates.reduce(
            (sum, current) => sum + current.hours,
            0
          ))
      );
  }
}
