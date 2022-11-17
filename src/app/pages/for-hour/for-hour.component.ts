import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './students/student/student.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule } from '@angular/forms';

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
    StudentsComponent,
    FormsModule
  ],
})
export class ForHourComponent {
  search: string = '';

}
