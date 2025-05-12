// src/app/services/authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';

/** Sólo los datos del perfil de usuario */
export interface User {
    id:    string;
    name:  string;
    email: string;
}

/** Lo que devuelve tu endpoint de /auth/google */
export interface AuthResponse {
    token:     string;   // JWT que usarás para autorizar peticiones
    role:      string;   // p.ej. 'admin' | 'user' | 'tutor'
    expiresIn: number;   // segundos hasta que el token expira
    user:      User;     // opcionalmente, datos de perfil
}

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    // FIXME: cuando el backend esté listo, pon aquí tu URL real
    private readonly endpoint = '/api/auth/google';

    constructor(private http: HttpClient) {}

    loginWithGoogle(idToken: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(this.endpoint, { token: idToken });
    }
}
