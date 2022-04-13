import { Component, OnInit, Input } from '@angular/core';
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
  // num1: number;
  // num2: number;
  // count: number;


  uploadQuote(quote:any) {
    this.quotes.push(quote);
    console.log(quote.quoteText)
  }

  toggleDescription(index:any) {
    this.quotes[index].isDescriptionShown = !this.quotes[index].isDescriptionShown;
  }
  //Delete quote function
  
  deleteQuote(index:any) {
    confirm('Do you want to delete this quote ?') ? this.quotes.splice(index, 1) : console.log('Not deleted');

  }
  highlightThis(highest:any) {
    console.log(1);
  }

  addDownVote(index:any) {
    this.quotes[index].downvotes++;
  }
  addUpVote(index:any) {
    this.quotes[index].upvotes++;
    // this.checkHighVote();
  }

  checkHighVote() {
    const votesArray: number[] = [];
    for (const quote of this.quotes) {
      votesArray.push(quote.upvotes);
    }
    votesArray.sort();
    console.log(votesArray[votesArray.length - 1]);
    if (votesArray.length - 1 === votesArray.length - 2) {

      return votesArray[votesArray.length - 2];
    }

    return votesArray[votesArray.length - 1];
  }

  ngOnInit() {
  }

  // ngOnInit(): void {
  // }

}
