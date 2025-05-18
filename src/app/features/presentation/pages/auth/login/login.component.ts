import { Component, NgZone, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../layout/component/app.floatingconfigurator';
import { GoogleIconComponent } from '../../../../../../assets/demo/components/google-icon-component';
import { AuthenticationService, AuthResponse } from './authentication.service';

declare global {
    interface Window { google: any; }
}

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule,
        CheckboxModule,
        InputTextModule,
        PasswordModule,
        FormsModule,
        RouterModule,
        RippleModule,
        GoogleIconComponent,
        ],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {
    private clientId = '315763549706-8dii7nrgliht0v8t5gp7os0lla0l3v5a.apps.googleusercontent.com';
    private gsiLoaded = false;

    constructor(
        private authService: AuthenticationService,
        private router:      Router,
        private ngZone:      NgZone
    ) {}

    ngOnInit(): void {
        // 1) Creamos el <script> de Google Identity Services
        const script = document.createElement('script');
        script.src   = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;

        // 2) Sólo cuando termine de cargar, inicializamos pasándole el client_id
        script.onload = () => {
            this.gsiLoaded = true;
            window.google.accounts.id.initialize({
                client_id: this.clientId,
                callback:  (res: any) => this.handleCredentialResponse(res)
            });
        };

        document.head.appendChild(script);
    }

    onGoogleLogin(): void {
        this.router.navigate(['/dashboard']);
        if (!this.gsiLoaded) {
            console.error('Google Identity Services aún no están listas.');
            return;
        }
        window.google.accounts.id.prompt();
    }

    private handleCredentialResponse(response: any) {
        this.ngZone.run(() => {
            const idToken = response.credential as string;
            this.authService.loginWithGoogle(idToken).subscribe({
                next: (res: AuthResponse) => {
                    localStorage.setItem('auth_token', res.token);
                    localStorage.setItem('auth_role',  res.role);
                    const expiresAt = Date.now() + res.expiresIn * 1000;
                    localStorage.setItem('expires_at', expiresAt.toString());
                    localStorage.setItem('user', JSON.stringify(res.user));
                    this.router.navigate(['/dashboard']);
                },
                error: err => console.error('Error en login con Google', err)
            });
        });
    }
}
