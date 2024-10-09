import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaJoinUsComponent } from './cta-join-us.component';

describe('CtaJoinUsComponent', () => {
  let component: CtaJoinUsComponent;
  let fixture: ComponentFixture<CtaJoinUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaJoinUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaJoinUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
