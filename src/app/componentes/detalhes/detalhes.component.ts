import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceitasService } from '../../serviços/receitas.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{

  receitaDetalhe: any = {};  
  receitaId: string = ''; 

  constructor(private route: ActivatedRoute, private service: ReceitasService){}

  ngOnInit(){
    this.receitaId = this.route.snapshot.paramMap.get('id') || '';
    this.carregarDetalhes();
  }

  carregarDetalhes(){
    this.service.getDetalhesReceita(this.receitaId).subscribe({
      next: (data)=>{
        this.receitaDetalhe = data.meals[0]
      },
      error: (erro)=>{
        console.log(`Erro ao carregar os detalhes da receita ${this.receitaId}:`, erro);
      }
    })
  }
}
