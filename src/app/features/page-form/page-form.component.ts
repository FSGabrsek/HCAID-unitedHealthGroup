import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.scss']
})
export class PageFormComponent {
    headers = [
        'Your personal information',
        'Some information about your heart',
        'Your heart under pressure',
        'Some additional questions'
    ]
    stage!: number;

    constructor(
        private router: Router
    ) {

    }

    ngOnInit() {
        this.stage = 0
    }
}
