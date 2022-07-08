import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    // therory : whenever my component is loading
    // i am creting the fromgroup and i am insertinv the
    // fromcontrol

    this.customersFormGroup = new FormGroup({
      UserName: new FormControl('Madan'),
      modDeveloper: new FormControl(2),
      commentsGroup: new FormGroup({
        modComments: new FormControl('Test comments'),
        modRevieew: new FormControl('Test Review'),
      }),
    });
  }

  evtSubmit(){
    console.log(this.customersFormGroup);
  }
}
