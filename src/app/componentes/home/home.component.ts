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
  receitasPorCategoria: { [key: string]: any[] } = {};
  pesquisaAtiva: boolean = false; // Controla se a pesquisa está ativa

  constructor(private service: ReceitasService, private router: Router) {}

  ngOnInit(): void {
    this.listarCategoria();
  }

  listarCategoria() {
    this.service.getCategorias().subscribe({
      next: (data) => {
        this.categoria = data.categories;

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
        this.receitasPorCategoria[categoria] = data.meals.slice(0, 5);
      },
      error: (erro) => {
        console.error(`Erro ao carregar receitas da categoria ${categoria}:`, erro);
      },
    });
  }

  buscar(nome: string) {
    this.pesquisaAtiva = true; // Quando a pesquisa for ativada, esconder categorias
    this.router.navigate(['/busca'], { queryParams: { query: nome } }); // Navegar para a página de busca com o parâmetro de consulta
  }
}
