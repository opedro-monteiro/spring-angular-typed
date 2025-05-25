import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AutorEntity, CategoriaEntity } from '../../../../model';
import { AutorControllerService } from '../../../../services/autor-controller/autor-controller.service';
import { LivroControllerService } from '../../../../services/livro-controller/livro-controller.service';

@Component({
  selector: 'app-books-form',
  imports: [],
  templateUrl: './books-form.component.html',
  styleUrl: './books-form.component.css'
})
export class BooksFormComponent implements OnInit {
  bookForm!: FormGroup;
  isEditMode = false;
  bookId!: string;

  authors: AutorEntity[] = [];
  categories: CategoriaEntity[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bookService: LivroControllerService,
    private authorService: AutorControllerService,
    private categoryService: LivroControllerService,
  ) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      titulo: ['', Validators.required],
      isbn: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{1,5}-\d{1,7}-\d{1,7}-\d{1}$/)]],
      categoria_id: ['', Validators.required],
      autor_id: ['', Validators.required],
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.bookId = id;
        this.loadBook(id);
      }
    });
  }

  loadBook(id: string): void {

  }

  loadAuthors(): void {
    this.authorService.getAllAuthors().subscribe({
      next: (data) => {
        this.authors = data;
      },
      error: (error) => {
        console.error('Erro ao buscar autores:', error);
      },
    })
  }

  loadCategories(): void {

  }

  onSubmit(): void {
    if (this.bookForm.invalid) return;

    if (this.isEditMode) {
      this.bookService.updateBook(Number(this.bookId), this.bookForm.value).subscribe(() => {
        // redirecionar ou mostrar sucesso
      });
    } else {
      this.bookService.createBook(this.bookForm.value).subscribe(() => {
        // redirecionar ou mostrar sucesso
      });
    }
  }
}
