import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetWrapperComponent } from './components/widget-wrapper/widget-wrapper.component';
import { WidgetWeatherComponent } from './components/widget-weather/widget-weather.component';
import { WidgetAdsComponent } from './components/widget-ads/widget-ads.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetWrapperComponent,
    WidgetWeatherComponent,
    WidgetAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
