import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
  private employeedetails = new BehaviorSubject<any>([]);


  constructor() { }

  createemp(empdetails){
    const currentValue = this.employeedetails.value;
    const updatedValue = [...currentValue, empdetails];
    this.employeedetails.next(updatedValue);
  console.log(this.employeedetails.value);
  }
}
