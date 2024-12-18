import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LivroResponseDto } from '../../../model';
import { AutorControllerService } from '../../../services/autor-controller/autor-controller.service';
import { LivroControllerService } from '../../../services/livro-controller/livro-controller.service';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  imports: [NgFor, MatSlideToggleModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  books: LivroResponseDto[] = [];

  constructor(
    private readonly livroService: LivroControllerService,
  ) { }

  ngOnInit() {
    // this.livroService.
    this.livroService.getAllBooks().subscribe({
      next: (data) => {
        this.books = data; // Salva os dados retornados na variável
        console.log('Livros:', this.books); // Verifica os dados no console
      },
      error: (error) => {
        console.error('Erro ao buscar livros:', error); // Trata erros
      },
    })
  }
}
