import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    private dbServiceUrl = 'http://ec2-54-93-99-40.eu-central-1.compute.amazonaws.com/measurements'; //'http://localhost:3000/measurements';

    constructor(private http: Http) { }

    getData(): Observable<any> {
        return this.http.get(this.dbServiceUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }
}