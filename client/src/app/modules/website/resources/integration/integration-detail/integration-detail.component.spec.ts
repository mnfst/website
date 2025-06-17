import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationDetailComponent } from './integration-detail.component';

describe('IntegrationDetailComponent', () => {
  let component: IntegrationDetailComponent;
  let fixture: ComponentFixture<IntegrationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
