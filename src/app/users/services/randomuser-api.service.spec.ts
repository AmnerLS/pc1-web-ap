import { TestBed } from '@angular/core/testing';

import { RandomuserApiService } from './randomuser-api.service';

describe('RandomuserApiService', () => {
  let service: RandomuserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomuserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
