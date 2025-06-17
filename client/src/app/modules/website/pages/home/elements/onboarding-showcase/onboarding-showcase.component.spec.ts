import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingShowcaseComponent } from './onboarding-showcase.component';

describe('OnboardingShowcaseComponent', () => {
  let component: OnboardingShowcaseComponent;
  let fixture: ComponentFixture<OnboardingShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
