import { Routes } from '@angular/router';
import { Empty } from './empty/empty';
import { DashboardComponent } from './dashboard/dashboard.component';

export default [
    { path: 'empty', component: Empty },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
