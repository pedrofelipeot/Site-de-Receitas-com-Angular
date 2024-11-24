import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../../serviços/receitas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categoria: any[] = [];
  receitasPorCategoria: { [key: string]: any[] } = {}; // Receitas por categoria
  receitasRecomendadas: any[] = []; // Receitas recomendadas

  constructor(private service: ReceitasService, private router: Router) {}

  ngOnInit(): void {
    this.listarCategoria(); // Carrega categorias e suas respectivas receitas
  }

  listarCategoria() {
    this.service.getCategorias().subscribe({
      next: (data) => {
        this.categoria = data.categories; // Carrega as categorias

        // Para cada categoria, carrega suas respectivas receitas
        for (let i = 0; i < this.categoria.length; i++) {
          const categoria = this.categoria[i].strCategory;
          this.carregarReceitasPorCategoria(categoria);
        }
      },
      error: (erro) => {
        console.log('Erro ao carregar categorias:', erro);
      },
    });
  }

  carregarReceitasPorCategoria(categoria: string) {
    this.service.getReceitasPorCategoria(categoria).subscribe({
      next: (data) => {
        // Armazenando as receitas por categoria
        this.receitasPorCategoria[categoria] = data.meals || [];

        // Quando as receitas de uma categoria são carregadas, chama a função para as receitas recomendadas
        this.carregarReceitasRecomendadas();
      },
      error: (erro) => {
        console.error(`Erro ao carregar receitas da categoria ${categoria}:`, erro);
      },
    });
  }

  carregarReceitasRecomendadas() {
    // Combina todas as receitas de todas as categorias em um único array
    const todasReceitas = Object.values(this.receitasPorCategoria).flat();
    
    // Embaralha as receitas e pega as 5 primeiras para exibir como recomendadas
    const shuffled = todasReceitas.sort(() => 0.7 - Math.random());
    this.receitasRecomendadas = shuffled.slice(0, 7);
  }

  buscar(nome: string) {
    this.router.navigate(['/busca'], { queryParams: { query: nome } }); // Navegar para a página de busca
  }
}
