import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-consents',
    template: `
    <a (click)="navigateTo(0)">active</a>
    <a (click)="navigateTo(1)">temp</a>
    <router-outlet></router-outlet>
    `
})
export class ConsentsComponent {
    constructor(private router: Router) {
        this.navigateTo(0);
    }
    navigateTo(num) {
        if (num === 0) {
            this.router.navigateByUrl('/consent/active');
        } else {
            this.router.navigateByUrl('/consent/temp');
        }
    }
}