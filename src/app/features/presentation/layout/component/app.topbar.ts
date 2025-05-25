import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../service/layout.service';
import { DatasourceLocalImpl } from '../../../data/data_sources/local/impl/datasource.local.impl';
import { OverlayBadge } from 'primeng/overlaybadge';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, OverlayBadge],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button *ngIf="showMenu" class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <img
                    src="assets/icon/Escudo.png"
                    class="h-10 w-auto"
                />
                <span>Tap In</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <p-overlaybadge value="2" class="layout-topbar-action">
                        <i class="pi pi-bell" style="font-size: 1.5rem"></i>
                    </p-overlaybadge>
                </div>
            </div>
            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-sign-out"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>`
})
export class AppTopbar implements OnInit {
    showMenu = true;

    constructor(
        public layoutService: LayoutService,
        private readonly local: DatasourceLocalImpl
    ) {}

    ngOnInit() {
        this.local.setRole('directivo');
        this.showMenu = this.local.getRole() === 'directivo';
    }
}
