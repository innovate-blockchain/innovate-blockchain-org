import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';

import { Leader } from '../../models/Leader';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private landingPageService: LandingPageService) { }
  leaders: Leader[];

  ngOnInit() {
    //this.landingPageService.postLeaders().subscribe();
    this.landingPageService.getLeaders().subscribe((leaders) => {
      this.leaders = leaders;
      console.log("Name " + this.leaders[0].name);
    });
  }

}

