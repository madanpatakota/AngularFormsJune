import { Component , ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularFormsJune';

  TeamList:any = [
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


  Relavants = [{ ID: 1, Name: "Yes" }, { ID: 2, Name: "No" }];


  @ViewChild("modForm")
  _modForm: any;


  evtSubmit(){
    console.log(this._modForm)
    ////******** this is highly recommndation....... */
  }


  evtSetValue(){
    this._modForm.setValue({
      UserEmail:"madan@gmail.com",
      UserName : "Madan",
      modDeveloper : 3,
      MyCommentsGroup : {
        modComments : "Test cases",
        modReview : "Test Review"
      }
    })
  }


  evtPatchValue(){
    this._modForm.form.patchValue({
      UserEmail:"madan@gmail.com",
      UserName : "Madan",
    });
  }

  evtReset(){
    this._modForm.reset();
  }



  


}
