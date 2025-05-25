import { Routes } from '@angular/router'
import { BooksFormComponent } from './pages/books/books-form/books-form.component'
import { BooksComponent } from './pages/books/books.component'
import { HomeComponent } from './pages/home/home.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'livros', component: BooksComponent },
  { path: 'livros/cadastrar', component: BooksFormComponent }, // substitua depois
  { path: 'livros/alterar', component: BooksFormComponent },   // substitua depois


  { path: 'livros/excluir', component: BooksComponent },   // substitua depois

  // autores
  { path: 'autores', component: HomeComponent },           // substitua depois
  { path: 'autores/cadastrar', component: HomeComponent }, // substitua depois
  { path: 'autores/alterar', component: HomeComponent },   // substitua depois
  { path: 'autores/excluir', component: HomeComponent },   // substitua depois
]
