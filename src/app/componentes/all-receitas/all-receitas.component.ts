import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceitasService } from '../../serviços/receitas.service';

@Component({
  selector: 'app-all-receitas',
  templateUrl: './all-receitas.component.html',
  styleUrl: './all-receitas.component.css'
})
export class AllReceitasComponent implements OnInit{
  receita: any[] = []
  categoriaNome: string = '';
  constructor(private rota: ActivatedRoute, private service: ReceitasService){}

  ngOnInit(): void {
    this.categoriaNome = this.rota.snapshot.paramMap.get('categoriaNome') || '';
    this.carregarReceitas()
  }
  carregarReceitas(){
    this.service.getReceitasPorCategoria(this.categoriaNome).subscribe({
      next: (data) =>{
        this.receita = data.meals
      },
      error: (erro) =>{
        console.log(`Erro ao carregar receitas para a categoria ${this.categoriaNome}:`)
      }
    })
  }
}
