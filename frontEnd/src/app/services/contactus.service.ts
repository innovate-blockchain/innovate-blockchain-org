import { Injectable } from '@angular/core';
import {ContactUs} from "../models/ContactUs";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ContactusService {

  constructor(public http: Http) { }

  getContactUsForms(): Observable<ContactUs[]> {
    return this.http.get('http://localhost:3000/api/contactus').
    map(res => {
      let results = <ContactUs[]>res.json();
      return results;
    });
  }
}
