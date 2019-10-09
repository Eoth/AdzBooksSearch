import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule, MatGridListModule, MatCardModule, MatIconModule, MatInputModule } from '@angular/material';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatGridListModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]) ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
