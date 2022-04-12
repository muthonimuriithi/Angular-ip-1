// import { identifierName, Quote } from "@angular/compiler";
// import { stringify } from "querystring";

export class Quotes {
    isDescriptionShown:boolean
    // id: number
    // quoteText: string
    // upvotes: number
    // downvotes: number
    // authorName: string
    // createdBy: string
    // dateCreated: DateConstructor


    // constructor (id:number, quoteText:string, upvotes:number, downvotes:number, authorName:string, dateCreated:Date) {
        constructor (public id : number,
            public quoteText : string,
            public upvotes: number,
            public downvotes: number,
            public authorName: string,
            public dateCreated: Date,
            public createdBy: string) {
                this.isDescriptionShown = false;
    
  }
}
