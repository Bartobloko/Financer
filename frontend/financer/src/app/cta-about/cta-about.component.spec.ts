import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaAboutComponent } from './cta-about.component';

describe('CtaAboutComponent', () => {
  let component: CtaAboutComponent;
  let fixture: ComponentFixture<CtaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
