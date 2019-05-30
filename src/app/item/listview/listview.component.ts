import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'ns-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css'],
  moduleId: module.id
})
export class ListviewComponent implements OnInit {

  source;
  // This pattern makes use of Angular’s dependency injection implementation to
  // inject an instance of the ItemService service into this class.
  // Angular knows about this service because it is included in your app’s main NgModule,
  // defined in app.module.ts.
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.itemService.getData()
      .subscribe((result) => {
        this.source = result;
      }, (error) => {
        console.log(error);
      });
  }

}
