import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Dev} from './dev';


@Injectable({
    providedIn: 'root'
})

export class DevService {
    apiBaseUrl = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

    constructor(private http:  HttpClient){

    }

    getDevs(): any{
        return this.http.get<Dev>(this.apiBaseUrl);
    }
}