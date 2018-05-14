import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { LandingPageAboutComponent } from "./components/landing-page/landing-page-about/landing-page.about.component";
import { LeadershipComponent } from './components/leadership/leadership.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { LandingPageService } from './services/landing-page.service';
import { ContactusService } from './services/contactus.service';
import { ProfilePictureService } from './components/profile-picture/profile-picture.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    LandingPageAboutComponent,
    ProfilePictureComponent,
    LeadershipComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [ProfilePictureComponent],
  providers: [LandingPageService, ContactusService, ProfilePictureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
