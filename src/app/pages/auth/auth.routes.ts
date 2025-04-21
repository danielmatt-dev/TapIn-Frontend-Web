import { Routes } from '@angular/router';
import { Access } from './acess/access';
import { Login } from './login';
import { Error } from './error';

export default [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'login', component: Login }
] as Routes;
