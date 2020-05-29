import { Component, OnInit } from '@angular/core';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

 data=[];
  constructor(private empservice: FormserviceService) { }
  ngOnInit(): void {
    this.empservice.getempdata().subscribe(data=>{
      this.data=data;
    });

  }

}
