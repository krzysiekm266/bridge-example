import { Component, ContentChild, ContentChildren, OnInit } from '@angular/core';
import { WidgetInt } from 'src/app/api/widget-api';
import { WIDGET } from 'src/app/injection-tokens/widget-injection-token';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
})
export class WidgetWrapperComponent implements OnInit {
  // @ContentChild(WIDGET) widget!: WidgetInt;
  @ContentChildren(WIDGET) widget!: WidgetInt[];

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.widget.map(widget => widget.refresh());
  }
}
