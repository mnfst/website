import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationListComponent } from './integration-list.component';

describe('IntegrationListComponent', () => {
  let component: IntegrationListComponent;
  let fixture: ComponentFixture<IntegrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
