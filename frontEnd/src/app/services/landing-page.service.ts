import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Leader } from '../models/Leader';

@Injectable()
export class LandingPageService {

  constructor(public http: Http) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get('http://localhost:3000/api/leaders').
      map(res => {
        let results = <Leader[]>res.json();
        return results;
      });
  }

  postLeaders(): Observable<any> {
    return this.http.post('http://localhost:3000/api/leaders', {
      "name": "Shilpa",
      "roles": ["Developer", "Designer"]
    }).map(response => response.json);
  }

  getLeaderWithId(): Observable<Leader> {
    let id: string;
    return this.http.get('http://localhost:3000/api/leaders/id').map(res => {
      return <Leader>res.json();
    });
  }

  deleteLeader(): Observable<Response> {
    let id: string = '5ad532147cf17c02182bf1ee';
    return this.http.delete('http://localhost:3000/api/leaders/id')
      .map(res => <Response>res.json());
  }

  editLeader(): Observable<Response> {
    return this.http.put('http://localhost:3000/api/leaders/id', {
      "name": "Shilpa",
      "roles": ["Developer", "Designer"]
    }).map(res => <Response>res.json());
  }
}
