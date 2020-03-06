import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Profile } from '../profile-model/profile';
import { ProfileHelperService } from '../services/profile-helper.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  constructor(private profileService: ProfileHelperService) { }

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
  isPrivateProfile:this.profileForm.value.privateInformation
  }
  console.log(profile);
  this.profileService.setProfile(profile);

  
}

}