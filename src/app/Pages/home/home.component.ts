import { Component, OnInit } from '@angular/core';
import { Creet } from '../../Data Models/creet.model';
import { DataService } from '../../Services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //create array or creet objects
  creets$: any;

  constructor(private dataService: DataService) { }

  //on init subscribe to data in service
  ngOnInit() {
    //this.dataService.getCreets().subscribe(data => this.creets$ = data);
    this.dataService.getCreets().toPromise().then(data => {
      console.log(data);
      this.creets$ = data;
    });
    return;
  }

}
