import { Component, Input, OnInit } from '@angular/core';
import { WidgetInt } from 'src/app/api/widget-api';
import { WIDGET } from 'src/app/injection-tokens/widget-injection-token';

@Component({
  selector: 'app-widget-ads',
  templateUrl: './widget-ads.component.html',
  styleUrls: ['./widget-ads.component.scss'],
  providers:[
    {
      provide: WIDGET,
      useExisting: WidgetAdsComponent,
    },
  ],
})
export class WidgetAdsComponent implements OnInit,WidgetInt {
  @Input() msg:string = '';
  constructor() { }

  load() {
    this.msg = 'Loaded Ads widget.'
  };

  refresh() {
    this.msg = 'Ads widget is refreshing...'
    setTimeout(()=>{this.msg = 'Ads widget is updated.'},2000);
  };

  ngOnInit(): void {
    this.load();
  }

}
