import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfilePictureService {

    constructor(public http: Http) { }

    public uploadImage(image: File): Observable<Response> {

        let header: Headers = new Headers();
        header.append("Content-Type", "application/json");
        let id: string = "5ad532147cf17c02182bf1ee";
        return this.http.put('http://localhost:3000/api/leaders/' + id + '/profile_picture',
            {
                "file": {
                    "avatar": image,
                    "path": ""
                },
            },
            {
                headers: header
            }
        ).map(res => <Response>res.json());
    }
}

