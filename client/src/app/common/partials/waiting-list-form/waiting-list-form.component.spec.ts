import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingListFormComponent } from './waiting-list-form.component';

describe('WaitingListFormComponent', () => {
  let component: WaitingListFormComponent;
  let fixture: ComponentFixture<WaitingListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaitingListFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
