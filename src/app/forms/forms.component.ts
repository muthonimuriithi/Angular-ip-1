import { Component,Output,EventEmitter, OnInit } from '@angular/core';

import { Quotes } from '../quotes';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  

  constructor() { }

  @Output() quoteEvent = new EventEmitter<Quotes>();
  quoteToAdd  = new Quotes(0, '', 0, 0, '', new Date(), '');
  

  ngOnInit(): void {
  }
  addQuote(quoteToAdd:any) {
    this.quoteEvent.emit(quoteToAdd)
    console.log(quoteToAdd)
    // quoteForm.reset()
  }
  // addQuote() {
  //   // this.quoteEvent.emit(this.quoteToAdd) 
    
  //   // tslint:disable-next-line: triple-equals
  //   if (this.quoteToAdd.authorName === null || this.quoteToAdd.authorName === undefined || this.quoteToAdd.authorName === '') {
  //     alert('Please input author name');
  //     this.quoteToAdd.authorName = '';
  //   } else if (this.quoteToAdd.quoteText === null || this.quoteToAdd.quoteText === undefined || this.quoteToAdd.quoteText === '') {
  //     alert('Please input quote ');
  //     this.quoteToAdd.quoteText = '';
  //   } else if (this.quoteToAdd.createdBy === null || this.quoteToAdd.createdBy === undefined || this.quoteToAdd.createdBy === '') {
  //     alert('Please input a valid created by ');
  //     this.quoteToAdd.createdBy = '';
  //     // tslint:disable-next-line: max-line-length
  //   // } else if (this.quoteToAdd.dateCreated === null || this.quoteToAdd.dateCreated === undefined || this.quoteToAdd.dateCreated.toString() === '') {
  //   //   // alert('Please input name ');
  //   } else {
  //     this.quoteEvent.emit(this.quoteToAdd);
  //     // alert('Quote Added');
  //     // this.quoteToAdd = new Quote('', '', '', '');
  //   }

  // }

}

