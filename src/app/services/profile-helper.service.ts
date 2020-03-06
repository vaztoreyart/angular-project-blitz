import { Injectable } from '@angular/core';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Injectable()
export class ProfileHelperService {

 @Output() profileEmmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

setProfile(profile: any){
  this.profileEmmitter.emit(profile);
}

}