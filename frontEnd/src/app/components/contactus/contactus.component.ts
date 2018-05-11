import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../../services/contactus.service';

import { ContactUs } from '../../models/ContactUs';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private  contactService: ContactusService) { }
  forms: ContactUs[];

  ngOnInit() {
    this.contactService.getContactUsForms().subscribe((forms) => {
      this.forms = forms;
      console.log("Email " + this.forms[0].email);
    });
  }
}
