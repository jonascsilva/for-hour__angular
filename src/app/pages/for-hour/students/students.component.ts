import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './student/student.component';
import {StudentsService} from 'src/app/services/students.service';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from 'src/app/pipes/filter.pipe';
import {Student} from "../../../interfaces/student.interface";

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

  constructor(private readonly _studentsService: StudentsService) {}

  ngOnInit(): void {
      this._studentsService.getListStudents().subscribe((students: Student[]) => this.students = students)
  }

}
