import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Route, Routes, Router } from '@angular/router';
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
import { LandingPageGroupsComponent } from './components/landing-page/landing-page-groups/landing-page-groups.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { DonationsComponent } from './components/landing-page/donations/donations.component';
import { ConactUsComponent } from './components/landing-page/conact-us/conact-us.component';
import { FooterComponent } from './components/footer/footer.component';

import { ConsultingPageComponent } from './components/consulting//consultingPage/consultingPage.component';
import { OurServicesComponent } from './components/consulting/our-services/our-services.component';
import { ConsultingDykComponent } from './components/consulting/consulting-dyk/consulting-dyk.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselBasic } from './components/horizontal-slide-carousel/carousel.basic';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    LandingPageAboutComponent,
    ProfilePictureComponent,
    LeadershipComponent,
    PlaceholderComponent,
    LandingPageGroupsComponent,
    SponsorsComponent,
    DonationsComponent,
    ConactUsComponent,
    FooterComponent,
    ConsultingPageComponent,
    OurServicesComponent,
    ConsultingDykComponent,
    NgbdCarouselBasic
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'home', component: LandingPageComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'consulting', component: ConsultingPageComponent }
    ]),
    NgbModule.forRoot()
  ],
  entryComponents: [ProfilePictureComponent],
  providers: [LandingPageService, ContactusService, ProfilePictureService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
