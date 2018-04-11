import { Component, OnInit } from '@angular/core';
import {LandingPageService} from '../../services/landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(landingPageService: LandingPageService) { }

  ngOnInit() {
  }

}
