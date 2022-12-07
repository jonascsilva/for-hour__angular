import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';

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
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'for-hour/:id',
    loadComponent: () =>
      import('./pages/certificate/certificate.component').then(
        (m) => m.CertificateComponent
    ),
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
