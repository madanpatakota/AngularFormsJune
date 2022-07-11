import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css'],
})
export class ReactiveApproachComponent {
  constructor() {}
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: no-trailing-whitespace
  // tslint:disable-next-line: typedef-whitespace
  // tslint:disable-next-line: one-line
  // tslint:disable-next-line: whitespace
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: whitespace

  customersFormGroup: any;

  TeamList: any = [
    {
      Id: 1,
      Name: 'Lakshmi',
    },
    {
      Id: 2,
      Name: 'Arjun',
    },
    {
      Id: 3,
      Name: 'Madan',
    },
    {
      Id: 4,
      Name: 'Rakshith',
    },
    {
      Id: 5,
      Name: 'Barsa',
    },
  ];

  // one small object
  ngOnInit(): void {
    // therory : whenever my component is initlizing
    // i am creting the fromgroup and i am insertinv the
    // fromcontrol
    // can we group and form control 

    // userNames : arrayformcontrol

    // can i create array of controls 

    // formarray

    this.customersFormGroup = new FormGroup({
      UserName: new FormControl('',[Validators.required]),
      modDeveloper: new FormControl('',Validators.required),
      commentsGroup: new FormGroup({
        modComments: new FormControl('',Validators.required),
        modRevieew: new FormControl('',Validators.required),
        InvalidComments : new FormGroup({

        }),
        validComments : new FormGroup({
          
        })
      }),
      Locations : new FormArray([new FormControl('Bangolore')])
    });
  }

  // i will take the one button say that add Location button
  // when i click on the add Location button i will add the locaiton 
  // form control within it

  evtSubmit(){
    console.log(this.customersFormGroup);
  }

  evtAddLocation(){
       const LocatinFormControl = new FormControl("Default City");
       const FormLocationArray  =
         (this.customersFormGroup.get("LocaTIOns")) as FormArray;
         // inserting the formcontrol into the formarray..
         FormLocationArray.push(LocatinFormControl);
  }





  
}
