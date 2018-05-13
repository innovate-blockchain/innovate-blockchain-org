import { Component, OnInit } from '@angular/core';

import { Leader } from '../../models/Leader'

import { LandingPageService } from '../../services/landing-page.service';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent implements OnInit {

  leaders: Array<Leader>;

  constructor(private landingPageService: LandingPageService) {
    this.landingPageService.getLeaders().subscribe(l => {
      this.leaders = l;
    });
  }

  ngOnInit() {

  }
}
