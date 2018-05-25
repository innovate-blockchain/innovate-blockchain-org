import { Component, OnInit } from '@angular/core';

import { Leader } from '../../models/Leader'

import { LandingPageService } from '../../services/landing-page.service';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {

  leaders: Leader[];

  constructor(private landingPageService: LandingPageService) {
    this.landingPageService.getLeaders().subscribe((leaders) => {
      this.leaders = leaders;
    });
  }

  ngOnInit() {
    //this.landingPageService.postLeaders().subscribe();
  }
}
