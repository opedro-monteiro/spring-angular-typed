import { Component, OnInit } from '@angular/core';
import { LivroResponseDto } from '../model';
import { LivroControllerService } from '../services/livro-controller/livro-controller.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LivroControllerService],
})
export class AppComponent implements OnInit {
  title = 'front';
  livros: LivroResponseDto[] = [];

  constructor(private readonly livroService: LivroControllerService) { }

  ngOnInit() {
    this.livroService.getAllBooks().subscribe({
      next: (data) => {
        this.livros = data; // Salva os dados retornados na variável
        console.log('Livros:', this.livros); // Verifica os dados no console
      },
      error: (error) => {
        console.error('Erro ao buscar livros:', error); // Trata erros
      },
    });
  }
}
