import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, `First Quote`, 0, 0),
    new Quotes(2, `Second Quote`, 0, 0),
    new Quotes(3, `Third Quote`, 0, 0),


  ]


  constructor() { }

  ngOnInit(): void {
  }

}
