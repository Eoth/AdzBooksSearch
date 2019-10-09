import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { MatFormFieldModule, MatGridListModule, MatCardModule, MatDialogModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsComponent ],
      imports: [
        MatFormFieldModule,
        MatGridListModule,
        MatCardModule,
        HttpClientModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
