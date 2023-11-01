import { Component } from '@angular/core';

@Component({
  selector: 'app-page-results',
  templateUrl: './page-results.component.html',
  styleUrls: ['./page-results.component.scss']
})
export class PageResultsComponent {
    base = 225
    alpha = 1.0
    prediction = 0
    voting_confidence = 0

    premium(): number {
        return Math.round(this.alpha * ((this.prediction * (1 + this.voting_confidence) * this.base) + ((1 - this.prediction) * (2 - this.voting_confidence) * this.base)))
    }
}
