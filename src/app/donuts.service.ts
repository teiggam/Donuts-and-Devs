import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Donut} from './donut';


@Injectable({
    providedIn: 'root'
})

export class Donutservice {
    apiBaseUrl = 'https://grandcircusco.github.io/demo-apis/donuts.json';
    apiDetailBase ='https://grandcircusco.github.io/demo-apis/donuts/';

    constructor(private http:  HttpClient){

    }

    getDonuts(): any{
        return this.http.get<Donut>(this.apiBaseUrl);
    }


    getDonutDetails(id: number): any{
    return this.http.get<Donut>(this.apiDetailBase+id+'.json');
    }
}