import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, LoadingComponent],
})
export class LoginComponent {
  // inicia o load desligado
  public loading: boolean = false;

  // exibe a senha quando clicado no icone do olho
  public hiddenPassword: boolean = true;

  constructor(private readonly router: Router) {}

  login() {
    this.loading = true;
    timer(1500).subscribe(() =>
      this.router.navigate(['for-hour']).then(() => (this.loading = false))
    );
  }
}
