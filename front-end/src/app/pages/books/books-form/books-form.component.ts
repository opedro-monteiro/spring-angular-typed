import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AutorEntity, CategoriaEntity } from '../../../../model';
import { AutorControllerService } from '../../../../services/autor-controller/autor-controller.service';
import { CategoriaControllerService } from '../../../../services/categoria-controller/categoria-controller.service';
import { LivroControllerService } from '../../../../services/livro-controller/livro-controller.service';

@Component({
  selector: 'app-books-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf, NgFor, NgForOf],
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
    private categoryService: CategoriaControllerService,
  ) { }

  ngOnInit(): void {
    this.loadAuthors();
    this.loadCategories();

    this.bookForm = this.fb.group({
      titulo: ['', Validators.required],
      isbn: ['', [Validators.required,]],
      categoria_id: ['', Validators.required],
      autor_id: ['', Validators.required],
    });
  }

  verifyTypeForm() {
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
    this.bookService.getBookById(Number(id)).subscribe({
      next: (data) => {
        this.bookForm.patchValue({
          titulo: data.titulo,
          isbn: data.isbn,
          categoria_id: data.categoria?.id,
          autor_id: data.autor?.id,
        });
      },
      error: (error) => {
        console.error('Erro ao buscar livro:', error);
      },
    });
  }

  loadAuthors(): void {
    this.authorService.getAllAuthors().subscribe({
      next: (data) => {
        this.authors = data;
        console.log('Autores carregados:', this.authors);
      },
      error: (error) => {
        console.error('Erro ao buscar autores:', error);
      },
    })
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
        console.log('Categorias carregadas:', this.categories);
      },
      error: (error) => {
        console.error('Erro ao buscar categorias:', error);
      },
    })
  }

  onCancel() {
    return
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
