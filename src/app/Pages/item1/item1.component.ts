import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.scss']
})
export class Item1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Function to prompt user with browser alert box - confirm or cancel
  promptDeleteAlert(name: string){
    if(confirm("Are you sure you want to delete " + name)){
      console.log("Item is deleted (if i made a function)")
    }
  }

}
