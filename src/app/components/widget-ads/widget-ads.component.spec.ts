import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAdsComponent } from './widget-ads.component';

describe('WidgetAdsComponent', () => {
  let component: WidgetAdsComponent;
  let fixture: ComponentFixture<WidgetAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
