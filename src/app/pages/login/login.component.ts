import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, LoadingComponent, FormsModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';


  // inicia o load desligado
  public loading: boolean = false;

  // exibe a senha quando clicado no icone do olho
  public hiddenPassword: boolean = true;

  constructor(private readonly router: Router, private auth: AuthService) {}

  async login(email: string, password: string) {
    this.loading = true;
    await this.auth.login(email, password).then(() => {
      this.router.navigate(['for-hour']).then(() => (this.loading = false))
    })
    .catch(e => console.log(e, ' : Usuário não encontrado'))
  }
}
