import { Routes } from '@angular/router';
import { AppLayout } from './app/features/presentation/layout/component/app.layout';
import { Notfound } from './app/features/presentation/pages/notfound/notfound';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./app/features/presentation/pages/auth/auth.routes') },

    {
        path: '',
        component: AppLayout,
        children: [
            { path: 'pages', loadChildren: () => import('./app/features/presentation/pages/pages.routes') }
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
