import { Component, OnInit } from '@angular/core';
import * as data from '../assets/data/chartData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StockFrontEnd';
  options: Array<any> = [];
  chartData : ChartData[] = (data as any).default;

  ngOnInit(){
    this.chartData.forEach( stock => {
        this.options.push(
        {
            title: {
                text: stock.Name
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: stock.Day
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                data: stock.Day
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '股價',
                data: stock.Price,
                type: 'line'
            },
            {
                name: '均價5',
                data: stock.PriceAvg5Days,
                type: 'line'
            },
            {
                name: '均價10',
                data: stock.PriceAvg10Days,
                type: 'line'
            },
            {
                name: '均價20',
                data: stock.PriceAvg20Days,
                type: 'line'
            },
            {
                name: '均價60',
                data: stock.PriceAvg60Days,
                type: 'line'
            }],
            dataZoom: [{
                type: 'inside',
                throttle: 50
            }]
        });
    });
  }
}

export class ChartData {
    Name: string;
    Day: string[];
    Price: number[];
    PriceAvg5Days: number[];
    PriceAvg10Days: number[];
    PriceAvg20Days: number[];
    PriceAvg60Days: number[];
}
