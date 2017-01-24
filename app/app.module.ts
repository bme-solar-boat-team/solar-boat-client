import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent }  from './app.component';
import { ChartComponent } from './components/chart.component';
import { DataService } from './services/data.service';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    ChartModule 
  ],
  declarations: [ 
    AppComponent,
    ChartComponent
  ],
  providers: [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
