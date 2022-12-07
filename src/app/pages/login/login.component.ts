import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { delay } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, LoadingComponent, FormsModule],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  };

  error!: boolean;

  // inicia o load desligado
  public loading: boolean = false;

  // exibe a senha quando clicado no icone do olho
  public hiddenPassword: boolean = true;

  constructor(private readonly router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isLoggedIn$.subscribe((isLogged) => {
      if (isLogged) {
        this.loading = true;
        this.router.navigate(['for-hour']).then(() => setTimeout(() => {
          this.loading = false;
        }, 1000));
      }
    });
  }

  async login() {
    this.loading = true;
    await this.auth
      .login(this.credentials.email, this.credentials.password)
      .then(() => {
        this.router.navigate(['for-hour']).then(() => (this.loading = false));
      })
      .catch((e) => {
        console.log(e);
        this.error = true;
        this.loading = false;
      });
  }
}
