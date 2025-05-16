import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';



export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuard],
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
