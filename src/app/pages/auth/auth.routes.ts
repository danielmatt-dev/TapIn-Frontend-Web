import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Error } from './error';

export default [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'error', component: Error },
    { path: 'login', component: Login }
] as Routes;
