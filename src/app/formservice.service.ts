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
  }
  getempdata():Observable<any>{
    return this.employeedetails.asObservable();
  }
  delete(i){
    const currentValue = this.employeedetails.value;
    const updatedValue =currentValue.splice(i,1);
    this.employeedetails.next(currentValue);
    
  }
}
