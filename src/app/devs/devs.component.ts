import { Component, OnInit, Inject, Input } from '@angular/core';
import { Dev } from '../dev';
import { DevService } from '../devs.service';


@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css'],
  providers: [DevService]
})
export class DevsComponent{

  constructor(private devAPI: DevService) {
    this.getDev();
  }

  dev: Dev ={} as Dev;

  getDev(): Dev {
    let response = this.devAPI.getDevs()
    console.log(response);
    return response.subscribe((topDev: Dev) => {
      this.dev ={
        complete: topDev.complete, 
        tiny: topDev.tiny}
    });
  }


  hidePost: boolean= true;

  togglePost(){
    this.hidePost = !this.hidePost,
    this.changeHidden();
  }

  changeHidden(){
    this.styleList = {
      'display': this.hidePost ? 'none' : 'block'
    }
  }
  styleList : object ={
    'display': this.hidePost ? 'none' : 'block'
    

  }


  

}
