import { Component, OnInit } from '@angular/core';
import { FormserviceService } from '../formservice.service';

import {faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  faCoffee1 = faTimes;
 data=[];
  constructor(private empservice: FormserviceService) { }
  ngOnInit(): void {
    this.empservice.getempdata().subscribe(data=>{
      this.data=data;
    });

  }
delete(i){
  this.empservice.delete(i);
  
}
}
