import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, `Kindness always comes back`,  0, 0, `By: k-cloe`, new Date(2022, 1, 27), `loise`),
    new Quotes(2, `Never regret anything that made you smile`, 0, 0, `By: l-Herman`, new Date(), ''),
    // new Quotes(3, `Worry less, smile more`, 0, 0, `By: T.june` new Date(2022, 3, 1))


  ]


  constructor() { }

  uploadQuote(quote:any) {
    this.quotes.push(quote);
    console.log(quote)
  }

  ngOnInit(): void {
  }

}
