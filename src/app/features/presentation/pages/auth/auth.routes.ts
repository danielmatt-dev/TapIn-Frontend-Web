import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Error } from './error';

export default [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'error', component: Error },
    { path: 'login', component: LoginComponent }
] as Routes;
