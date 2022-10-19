import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { fadeOut } from '../../animations/fade-in-out.animation';
import { timer } from 'rxjs';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-page-start',
  templateUrl: './page-start.component.html',
  styleUrls: ['./page-start.component.scss'],
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  animations: [fadeOut],
})
export class PageStartComponent implements OnInit {
  // exibe o a tela
  public visible = true;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    timer(1500).subscribe(() =>
      this.router.navigate(['login']).then(() => (this.visible = !this.visible))
    );
  }
}
