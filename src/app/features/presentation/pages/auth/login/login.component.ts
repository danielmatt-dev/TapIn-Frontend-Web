import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { GoogleIconComponent } from '../../../../../../assets/demo/components/google-icon-component';
import { jwtDecode } from 'jwt-decode';
import { DatasourceLocalImpl } from '../../../../data/data_sources/local/impl/datasource.local.impl';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

declare global {
    interface Window { google: any; }
}

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, GoogleIconComponent, ToastModule],
    providers: [MessageService],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private clientId = '136929181439-7ile1qcatksnrhdplketasl265oun097.apps.googleusercontent.com';
    private gsiLoaded = false;

    constructor(
        private router: Router,
        private local: DatasourceLocalImpl,
        private readonly messageService: MessageService
    ) {}

    ngOnInit(): void {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;

        script.onload = () => {
            this.gsiLoaded = true;
            window.google.accounts.id.initialize({
                client_id: this.clientId,
                callback: (res: any) => this.handleCredentialResponse(res),
                ux_mode: 'popup' // ← fuerza el flujo de popup
            });
        };

        document.head.appendChild(script);
    }

    onGoogleLogin(): void {
        if (!this.gsiLoaded) {
            console.error('GSI aún no cargado');
            return;
        }
        // Esto abre el popup; no usa FedCM, así desaparecen los errores de CORS
        window.google.accounts.id.prompt();
    }

    private async handleCredentialResponse(response: any) {
        const idToken = response.credential as string;

        interface GooglePayload {
            email: string;
        }
        const payload = jwtDecode<GooglePayload>(idToken);
        const email = payload.email;

        if (email !== 'danielgonzales3005@gmail.com' && email !== 'armando.daniel.martinez.gonzalez@gmail.com') {
            this.messageService.add({
                summary: 'Usuario no autorizado',
                detail: 'No tienes permisos suficientes para ver esta página',
                severity: 'warn',
                life: 4000
            });
            return;
        }

        if (email === 'danielgonzales3005@gmail.com') {
            this.local.setRole('administrativo');
        }

        if (email === 'armando.daniel.martinez.gonzalez@gmail.com') {
            this.local.setRole('directivo');
        }

        await this.router.navigate(['/dashboard']);
    }
}
