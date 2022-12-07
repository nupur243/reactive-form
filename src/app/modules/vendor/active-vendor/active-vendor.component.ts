import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {
htmlForm=new FormGroup({
name: new FormControl('',Validators.required), 
email: new FormControl('', Validators.required),
bio: new FormControl(),
domain: new FormControl()
});


objectSpace:any;


onSubmit(event: any){
  this.objectSpace =document.getElementById("Object");
  this.objectSpace.innerHTML= JSON.stringify(this.htmlForm.value) ;
  // console.log("hello");
  console.log(this.objectSpace);
 
  // console.log(event.submitter)

}


button=document.getElementsByClassName("btn");
  constructor() { }

  ngOnInit(): void {


  }

}
