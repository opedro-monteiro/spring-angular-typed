/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { AutorEntity } from './autorEntity';
import type { CategoriaEntity } from './categoriaEntity';

export interface LivroEntity {
  autor?: AutorEntity;
  categoria?: CategoriaEntity;
  id?: number;
  isbn?: string;
  titulo?: string;
}
