import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerWithUsComponent } from './partner-with-us.component';

describe('PartnerWithUsComponent', () => {
  let component: PartnerWithUsComponent;
  let fixture: ComponentFixture<PartnerWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerWithUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
