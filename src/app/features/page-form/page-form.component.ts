import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    categories = [
        'personal',
        'info',
        'tests',
        'extra'
    ]
    stage!: number
    header!: string
    category!: string

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.stage = 0
        this.header = this.headers[this.stage]
        this.category = this.categories[this.stage]
    }

    advance() {
        if (this.stage < 3) {
            this.stage++
        }
        
        this.header = this.headers[this.stage]
        this.category = this.categories[this.stage]
        console.log(this.header);

        console.log(this.route.url);
    
        this.router.navigate([this.category], { relativeTo: this.route })
    }
}
