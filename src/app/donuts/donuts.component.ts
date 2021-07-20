import { Component, OnInit, Inject, Input } from '@angular/core';
import { Donut, Result } from '../donut';
import { Donutdetails } from '../donutdetails';
import { Donutservice } from '../donuts.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css'],
  providers: [Donutservice]
})
export class DonutsComponent {

  constructor(private donutsAPI: Donutservice) { 
    this.getDonut();
  }

  donut: Donut = {} as Donut;
  @Input() id: number = 0;

  getDonut(): any{
    return this.donutsAPI.getDonuts()
    .subscribe((data: Donut) => {
      this.donut = {
        count: data.count,
        results: data.results
    };
    console.log(this.donut);
  }
    )
  }

  detailedDonut: Donutdetails = {} as Donutdetails

  getFullDonut(id: number): Donutdetails{
    return this.donutsAPI.getDonutDetails(id)
    .subscribe((data: Donutdetails) => {
      this.detailedDonut = { ... data }
      }
    )
  }

}
