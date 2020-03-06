import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Profile } from '../profile-model/profile';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  constructor() { }


  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    privateInformation: new FormControl(''),
  });

  ngOnInit() {
  }
saveProfile(){
  let profile: Profile;
  profile= {firstName: this.profileForm.value.firstName,
  lastName: this.profileForm.value.lastName,
  age:this.profileForm.value.age,
  gender:this.profileForm.value.gender,
  privateProfile:this.profileForm.value.privateInformation
  }
  console.log(profile);

  
}

}