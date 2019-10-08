import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

 // requettage à l'API
  getBooks(val: string) {
   return this.http.get(`${environment.apiUrl}${val}`).toPromise();
  }


}
