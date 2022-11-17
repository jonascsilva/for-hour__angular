import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { GetStudentsService } from 'src/app/services/get-students.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

export interface Student {
  nome: string;
  matricula: number;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  standalone: true,
  imports: [CommonModule, StudentComponent, FormsModule, FilterPipe],
})
export class StudentsComponent implements OnInit {
  public students: Student[] = [];
  public search: string = '';

  constructor(private studentsService: GetStudentsService) {}

  ngOnInit(): void {
      this.studentsService.getListStudents().subscribe(users => this.students = users)
  }

}
