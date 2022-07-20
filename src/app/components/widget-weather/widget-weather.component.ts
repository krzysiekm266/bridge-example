import { Component, Input, OnInit } from '@angular/core';
import { WidgetInt } from 'src/app/api/widget-api';
import { WIDGET } from 'src/app/injection-tokens/widget-injection-token';

@Component({
  selector: 'app-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.scss'],
  providers:[
    {
      provide: WIDGET,
      useExisting: WidgetWeatherComponent,
    },
  ],
})
export class WidgetWeatherComponent implements OnInit,WidgetInt {
  @Input() msg:string = '';
  constructor() { }
  load() {
    this.msg = 'Loaded Weather widget.'
  };
  refresh() {
    this.msg = 'Weather widget is refreshing...'
    setTimeout(()=>{this.msg = 'Weather widget is updated.'},2000);
  };

  ngOnInit(): void {
    this.load();
  }

}
