import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaCalendarComponent } from './cta-calendar.component';

describe('CtaCalendarComponent', () => {
  let component: CtaCalendarComponent;
  let fixture: ComponentFixture<CtaCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
