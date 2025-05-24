import { Injectable } from '@angular/core';
import { DatasourceLocal } from '../datasource.local';

@Injectable({
    providedIn: 'root'
})
export class DatasourceLocalImpl implements DatasourceLocal {

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    setRole(role: string) {
        localStorage.setItem('role', role);
    }

    getRole(): string {
        return localStorage.getItem('role') ?? 'directivo';
    }

    clear(): void {
        localStorage.clear()
    }

}
