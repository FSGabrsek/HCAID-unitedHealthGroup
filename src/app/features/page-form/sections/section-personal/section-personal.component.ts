import { Component } from '@angular/core';

@Component({
  selector: 'app-section-personal',
  templateUrl: './section-personal.component.html',
  styleUrls: ['./section-personal.component.scss']
})
export class SectionPersonalComponent {
    sex!: number
    age!: number

    advance() {
        
    }
}
