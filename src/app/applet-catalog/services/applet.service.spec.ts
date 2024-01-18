import { TestBed } from '@angular/core/testing';

import { AppletService } from './applet.service';

describe('AppletService', () => {
  let service: AppletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
