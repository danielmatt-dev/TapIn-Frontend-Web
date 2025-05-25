import { Routes } from '@angular/router';
import { Empty } from './empty/empty';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeriodosComponent } from './periodos/periodos.component';

export default [
    { path: 'empty', component: Empty },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'periodos', component: PeriodosComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
