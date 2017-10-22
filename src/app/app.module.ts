import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { HeaderBarModule }  from './shared/modules/header-bar/header-bar.module';

@NgModule({
  imports:      [ BrowserModule,
                  HeaderBarModule,
                  NgbModule.forRoot() ],
  declarations: [ AppComponent,
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
