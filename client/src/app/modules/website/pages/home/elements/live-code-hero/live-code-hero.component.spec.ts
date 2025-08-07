import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCodeHeroComponent } from './live-code-hero.component';

describe('LiveCodeHeroComponent', () => {
  let component: LiveCodeHeroComponent;
  let fixture: ComponentFixture<LiveCodeHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveCodeHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveCodeHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
