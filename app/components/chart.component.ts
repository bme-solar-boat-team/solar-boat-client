import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

const Highcharts = require('highcharts');

@Component({
    selector: 'my-chart',
    template: `<chart [options]="optionsDolesszog"></chart>
                <chart [options]="optionsETA"></chart>`,
})
export class ChartComponent implements OnInit {
    data: any;
    optionsDolesszog: Object;
    optionsETA: Object;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getData()
            .subscribe(
            data => {
                console.log(data);
                this.optionsDolesszog = {
                    chart: {
                        type: 'line'
                    },
                    title: { text: 'Dölésszög' },
                    series: [{
                        data: data.map((e: any) => e.dolesszog),
                    }]
                };
                this.optionsETA = {
                    chart: {
                        type: 'column'
                    },
                    title: { text: 'ETA' },
                    series: [{
                        data: data.map((e: any) => e.ETA),
                    }]
                };
            },
            err => {
                console.log(err);
            });
    }
}