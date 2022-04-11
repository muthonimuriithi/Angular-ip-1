import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, `Kindness always comes back. By: k-cloe`, 0, 0),
    new Quotes(2, `Never regret anything that made you smile. By: l-Herman`, 0, 0),
    new Quotes(3, `Worry less, smile more. By: T.june`, 0, 0),


  ]


  constructor() { }

  ngOnInit(): void {
  }

}
