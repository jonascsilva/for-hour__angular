import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { Student } from '../../../../interfaces/student.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
})
export class StudentComponent {
  @Input() student!: Student;

  // define algumas estruturas do css
  // index  do array
  @Input() index!: number;
}
