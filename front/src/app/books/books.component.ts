import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LivroDto } from '../../model';
import { LivroControllerService } from '../../http/generated/livro-controller/livro-controller.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-books',
  imports: [NgFor, CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  listBooks$!: Observable<LivroDto[] | null>;
  constructor() { }
}
