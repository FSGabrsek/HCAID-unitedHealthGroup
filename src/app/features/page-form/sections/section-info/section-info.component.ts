import { Component } from '@angular/core';

@Component({
  selector: 'app-section-info',
  templateUrl: './section-info.component.html',
  styleUrls: ['./section-info.component.scss']
})
export class SectionInfoComponent {
    cp!: number
    trestbps!: number
    chol!: number
    fbs!: number
    restecg!: number

    valid(): boolean {
        return ([1, 2, 3, 4].indexOf(this.cp) > -1) && (this.trestbps > 0) && (this.chol > 0) && ([1, 0].indexOf(this.fbs) > -1) && ([0, 1, 2].indexOf(this.restecg) > -1)
    }

    advance() {
        
    }
}
