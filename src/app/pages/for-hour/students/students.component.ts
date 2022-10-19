import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';

export interface Student {
  name: string;
  id: number;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  standalone: true,
  imports: [CommonModule, StudentComponent],
})
export class StudentsComponent {
  public students: Student[] = [
    {
      name: 'Joana Alves',
      id: 123456,
    },
    {
      name: 'Joana Alves',
      id: 654321,
    },
    {
      name: 'Joana Alves',
      id: 123654,
    },
  ];
}
