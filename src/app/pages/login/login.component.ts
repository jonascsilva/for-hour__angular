import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormsModule } from '@angular/forms';
import { EmailTaken } from 'src/app/validators/email-taken';
import { delay, tap } from 'rxjs';

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
    this.loading = true;
    this.auth.isLoggedIn$.pipe(delay(1000)).subscribe((isLogged) => {
      if (isLogged)
        this.router.navigate(['for-hour']).then(() => (this.loading = false));
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
