import { Component } from '@angular/core';

@Component({
  selector: 'app-section-extra',
  templateUrl: './section-extra.component.html',
  styleUrls: ['./section-extra.component.scss']
})
export class SectionExtraComponent {
    ca!: number
    thal!: number

    valid(): boolean {
        return ([0, 1, 2, 3].indexOf(this.ca) > -1) && ([3, 6, 7].indexOf(this.thal) > -1)
    }

    advance() {
        
    }
}
