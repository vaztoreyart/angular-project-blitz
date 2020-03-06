import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GridProfileComponent } from './card-profile/grid-profile/grid-profile.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, ProfileComponentComponent, GridProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
