import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DevsComponent } from './devs/devs.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Donutservice } from './donuts.service';
import { DevService } from './devs.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DevsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent, pathMatch: 'full'},
      {path: 'app-root', component: AppComponent},
      {path: 'devs', component: DevsComponent},
      {path: 'donuts', component: DonutsComponent}
    ])
  ],
  providers: [HttpClient, Donutservice, DevService],
  bootstrap: [AppComponent]
})
export class AppModule { }
