import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-section-extra',
  templateUrl: './section-extra.component.html',
  styleUrls: ['./section-extra.component.scss']
})
export class SectionExtraComponent {
    ca!: number
    thal!: number
    oldpeak!: number
    slope!: number

    ecg!: boolean
    flu!: boolean

    constructor(private dataservice: DataService) {

    }

    valid(): boolean {
        return ([0, 1, 2, 3].indexOf(this.ca) > -1) && ([3, 6, 7].indexOf(this.thal) > -1) && (this.oldpeak >= 0) && ([1, 2, 3].indexOf(this.slope) > -1)
    }

    advance() {
        if (!([0, 1, 2, 3].indexOf(this.ca) > -1)) {
            this.ca = 0
        }

        if (!([3, 6, 7].indexOf(this.thal) > -1)) {
            this.thal = 3
        }
        
        if (!(this.oldpeak >= 0)) {
            this.oldpeak = 0
        }

        if (!([1, 2, 3].indexOf(this.slope) > -1)) {
            this.slope = 1
        }

        this.dataservice.save_extra(this.oldpeak, this.slope, this.ca, this.thal)
        console.log(this.dataservice.valid);
        
        this.dataservice.clear()
    }
}
