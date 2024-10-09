import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaChartsComponent } from './cta-charts.component';

describe('CtaChartsComponent', () => {
  let component: CtaChartsComponent;
  let fixture: ComponentFixture<CtaChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
