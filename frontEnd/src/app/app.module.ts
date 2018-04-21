import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { LandingPageService } from './services/landing-page.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LandingPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
