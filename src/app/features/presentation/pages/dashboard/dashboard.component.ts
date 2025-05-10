import { Component } from '@angular/core';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';

@Component({
    selector: 'app-empty',
    standalone: true,
    imports: [AppFloatingConfigurator],
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

}
