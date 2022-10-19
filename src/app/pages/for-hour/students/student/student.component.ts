import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../students.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
})
export class StudentComponent {
  @Input()
  public student!: Student;

  // define algumas estruturas do css
  // index  do array
  @Input()
  public index!: number;
}
