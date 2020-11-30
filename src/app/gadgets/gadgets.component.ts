import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { GadgetDetails } from './GadgetsDetails';
import { Router } from '@angular/router';
import { GadgetService } from './gadgets.service';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.scss']
})
export class ViewGadgetsComponent implements OnInit {
  currentUser:string;
  
  constructor(private gadgetService: GadgetService, private router : Router) { }

  gadgetsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  gadgets: Observable<GadgetService[]>;
  gadget : GadgetDetails = new GadgetDetails();
  deleteMessage=false;
  gadgetlist:any;
  isTicketRaised = false;   

  ngOnInit() {
    this.isTicketRaised=false;
    this.dtOptions = {
      pageLength: 10,
      stateSave:true,
      lengthMenu:[[10, 20, 30, -1], [10, 20, 30, "All"]],
      processing: true
      };  
    this.currentUser = sessionStorage.getItem("currentUser");
    console.log('user in gadget='+this.currentUser);
    this.gadgetService.getGadgetsList().subscribe(data =>{  
    this.gadgets = data;
    console.log('got data from console='+this.gadgets);
    this.dtTrigger.next();
    })
    
  }
  
  gadgetform=new FormGroup({
    emailId: new FormControl('' , Validators.required),
    model: new FormControl('' , Validators.required),
    serialNo: new FormControl('', Validators.required),
    mcType : new FormControl('' , Validators.required),
    dateOfAssigne : new FormControl('' , Validators.required),
    status : new FormControl('' , Validators.required),
    companyName :new FormControl('' , Validators.required),
    issue : new FormControl(),
  });

  GadgetSelected(gadget:any){
      console.log(gadget);
      this.gadget = gadget;
  }
  
  get CompanyName(){
    return this.gadgetform.get('companyName');
  }

  get EmailId(){
    return this.gadgetform.get('emailId');
  }

  get SerialNo(){
    return this.gadgetform.get('serialNo');
  }
  
  get Model(){
    return this.gadgetform.get('model');
  }
  
  get McType(){
    return this.gadgetform.get('mcType');
  }

  get DateOfAssigne(){
    return this.gadgetform.get('dateOfAssigne');
  }

  get Status(){
    return this.gadgetform.get('status');
  }

  get Issue(){
    return this.gadgetform.get('issue');
  }
  
  changeisUpdate(){
    this.isTicketRaised=false;
  }

}
