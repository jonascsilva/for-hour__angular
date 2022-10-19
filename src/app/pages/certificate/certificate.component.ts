import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CertificateComponent {
  back() {
    window.history.back();
  }
}
