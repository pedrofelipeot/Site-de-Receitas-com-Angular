import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../../serviços/receitas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {
  categoria: any[] = [];
  receitasPorCategoria: { [key: string]: any[] } = {};

  constructor(private service: ReceitasService) {}

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
      }
    });
  }

  carregarReceitasPorCategoria(categoria: string) {
    this.service.getReceitasPorCategoria(categoria).subscribe({
      next: (data) => {
        this.receitasPorCategoria[categoria] = data.meals.slice(0, 5);
      },
      error: (erro) => {
        console.error(`Erro ao carregar receitas da categoria ${categoria}:`, erro);
      }
    });
  }
}
