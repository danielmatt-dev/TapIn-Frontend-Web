import { Routes } from '@angular/router';
import { AppLayout } from './app/features/presentation/layout/component/app.layout';
import { Notfound } from './app/features/presentation/pages/notfound/notfound';
import { DashboardComponent } from './app/features/presentation/pages/dashboard/dashboard.component';
import { PeriodosComponent } from './app/features/presentation/pages/periodos/periodos.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./app/features/presentation/pages/auth/auth.routes') },

    {
        path: '',
        component: AppLayout,
        children: [
            { path: 'pages', loadChildren: () => import('./app/features/presentation/pages/pages.routes') },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'periodos', component: PeriodosComponent },
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
