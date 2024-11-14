import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  private  baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  // 1. Pesquisar refeição por nome
  buscarReceitaPorNome(nome: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.php?s=${nome}`);
  }

  // 2. Listar refeições pela primeira letra
  listarPorLetra(letra: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.php?f=${letra}`);
  }

  // 3. Buscar detalhes da refeição por ID
  buscarReceitaPorId(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookup.php?i=${id}`);
  }

  // 4. Obter uma refeição aleatória
  buscarReceitaAleatoria(): Observable<any> {
    return this.http.get(`${this.baseUrl}/random.php`);
  }

  // 5. Listar todas as categorias
  listarCategorias(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories.php`);
  }
}
