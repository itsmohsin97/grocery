import { Component } from '@angular/core';
import { grocerydetails } from './app.models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'grocery list';
  public productname: string;
  public quantity: number;
  public price: number;
  public total: number;
  public grandTotal: number = 0;

  public listofDetails: grocerydetails[];

  constructor() {
    this.listofDetails = new Array<grocerydetails>();
  }

  public adddetails() {
    let groceryDetails = new grocerydetails(this.productname, this.quantity, this.price, this.quantity * this.price);
    this.listofDetails.push(groceryDetails);
    this.grandTotal = 0;
    for (let i = 0; i < this.listofDetails.length; i++) {
      this.grandTotal = this.grandTotal + this.listofDetails[i].total;
    }
  }
  public reset() {
    this.productname='';
    this.quantity =null;
    this.price = null;
  }

}
