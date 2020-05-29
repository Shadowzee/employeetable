import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Validators, FormGroup, FormControl } from '@angular/forms';
import { FormserviceService } from '../formservice.service';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  submitted=false;
  employeedetail = new FormGroup({
    name: new FormControl('',Validators.required),
    employeeId: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
  });
  constructor(private modalService: NgbModal,private empservice: FormserviceService) { }

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    
    });
  }
  submit(){
   // this.submitted=true;
    // if (this.employeedetail.valid) {
    //   this.submitted=false;
    console.log(this.employeedetail.value);
    this.empservice.createemp(this.employeedetail.value);
    this.employeedetail.reset();
    this.modalService.dismissAll();
   
    //}
  }
  clear(){
    this.employeedetail.reset();
  }
}
