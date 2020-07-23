import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.scss']
})
export class Item3Component implements OnInit {

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
