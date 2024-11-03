import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  // Método para obter todas as categorias
  getCategorias(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/categories.php`);
  }

  // Método para obter receitas de uma categoria específica
  getReceitasPorCategoria(categoria: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/filter.php?c=${categoria}`);
  }
}
