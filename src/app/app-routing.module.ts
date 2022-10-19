import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/page-start/page-start.component').then(
        (m) => m.PageStartComponent
      ),
  },
  {
    path: 'for-hour',
    loadComponent: () =>
      import('./pages/for-hour/for-hour.component').then(
        (m) => m.ForHourComponent
      ),
  },
  {
    path: 'for-hour/:id',
    loadComponent: () =>
      import('./pages/certificate/certificate.component').then(
        (m) => m.CertificateComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
