import { Component, OnInit } from '@angular/core';
import { Lists } from '../rest/lists'
import { RestService } from '../rest.service';
@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  items:Lists[]= [];

  constructor(public rs:RestService) {

   }
  ngOnInit(): void {

    this.rs.getLists().subscribe((response) =>{
      this.items=response
    })
  }

key:string = 'id';
reverse:boolean =false;
sort(key){
  this.key =key;
  this.reverse =! this.reverse;
}

}
