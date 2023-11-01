import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-section-info',
  templateUrl: './section-info.component.html',
  styleUrls: ['./section-info.component.scss']
})
export class SectionInfoComponent {
    cp!: number
    trestbps!: number
    chol!: number

    constructor(private dataservice: DataService) {

    }

    advance() {
        if (!([1, 2, 3, 4].indexOf(this.cp) > -1)) {
            this.cp = 4
        }

        if (!(this.trestbps > 0)) {
            this.trestbps = 131
        }

        if (!(this.chol > 0)) {
            this.chol = 250
        }

        this.dataservice.save_info(this.cp, this.trestbps, this.chol)
        console.log(this.dataservice.valid);

    }
}
