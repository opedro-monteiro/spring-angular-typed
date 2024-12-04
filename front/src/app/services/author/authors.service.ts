import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private apiUrl = 'https://api.example.com/api/authors';
  constructor(private http: HttpClient) { }
}
