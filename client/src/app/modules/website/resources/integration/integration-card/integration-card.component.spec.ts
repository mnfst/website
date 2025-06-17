import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationCardComponent } from './integration-card.component';

describe('IntegrationCardComponent', () => {
  let component: IntegrationCardComponent;
  let fixture: ComponentFixture<IntegrationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
