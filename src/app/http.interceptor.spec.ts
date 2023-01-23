import { TestBed } from '@angular/core/testing';

import { HttpJwtInterceptor } from './http.interceptor';

describe('HttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpJwtInterceptor
    ]
  }));

  it('should be created', () => {
    const interceptor: HttpJwtInterceptor = TestBed.inject(HttpJwtInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
