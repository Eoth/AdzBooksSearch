import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [BooksService]
  }));

  it('should be created', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service).toBeTruthy();
  });
  // tslint:disable-next-line: align
  it('should have getData function', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service.getBooks).toBeTruthy();
  });

});
