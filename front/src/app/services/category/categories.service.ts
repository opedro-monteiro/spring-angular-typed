import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = 'https://api.example.com/api/categories';
  constructor(private http: HttpClient) { }
}
