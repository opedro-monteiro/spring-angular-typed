import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl = 'https://api.example.com/api/books';
  constructor(private http: HttpClient) { }
}
