import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-page-results',
  templateUrl: './page-results.component.html',
  styleUrls: ['./page-results.component.scss']
})
export class PageResultsComponent {
    base = 225
    alpha = 1.0
    prediction = -1
    confidence = 0

    constructor(
        private dataService: DataService,
        private networkService: NetworkService
    ) {}

    ngOnInit() {
        this.networkService.postPredictGood(this.dataService.formdata)
            .subscribe((result: any) => {
                this.prediction = result.prediction
                this.confidence = result.voting_confidence
            })
    }

    premium(): number {
        return Math.round(this.alpha * ((this.prediction * (1 + this.confidence) * this.base) + ((1 - this.prediction) * (2 - this.confidence) * this.base)))
    }
}
