import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReceitasService {
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/categories.php`);
  }

  getReceitasPorCategoria(categoria: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/filter.php?c=${categoria}`);
  }

  getDetalhesReceita(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/lookup.php?i=${id}`);
  }

  getRandomRecipes(): Observable<any[]> {
    const randomRecipeRequests = Array(5).fill(null).map(() => this.http.get<any>(this.baseUrl)); 

    return forkJoin(randomRecipeRequests); 
  }
}
