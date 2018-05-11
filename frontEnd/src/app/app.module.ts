import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';

import { LandingPageService } from './services/landing-page.service';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ContactusService } from './services/contactus.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [LandingPageService, ContactusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
