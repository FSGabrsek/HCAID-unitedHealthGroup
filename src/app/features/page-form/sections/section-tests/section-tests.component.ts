import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-section-tests',
  templateUrl: './section-tests.component.html',
  styleUrls: ['./section-tests.component.scss']
})
export class SectionTestsComponent {
    thalach!: number
    exang!: number

    constructor(private dataservice: DataService) {

    }

    advance() {
        if (!(this.thalach > 0)) {
            this.thalach = 150
        }

        if (!([1, 0].indexOf(this.exang) > -1)) {
            this.exang = 0
        }

        this.dataservice.save_tests(this.thalach, this.exang)
    }
}
