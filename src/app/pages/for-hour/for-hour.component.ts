import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './students/student/student.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { StudentsComponent } from './students/students.component';

@Component({
  selector: 'app-for-hour',
  templateUrl: './for-hour.component.html',
  styleUrls: ['./for-hour.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    StudentComponent,
    ForHourComponent,
    HeaderComponent,
    FilterComponent,
    StudentsComponent,
  ],
})
export class ForHourComponent {}
