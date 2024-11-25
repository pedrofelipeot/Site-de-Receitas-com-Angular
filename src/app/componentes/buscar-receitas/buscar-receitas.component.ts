import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PesquisaService } from '../../serviços/pesquisa.service';

@Component({
  selector: 'app-buscar-receitas',
  templateUrl: './buscar-receitas.component.html',
  styleUrls: ['./buscar-receitas.component.css'],
})
export class BuscarReceitasComponent implements OnInit {
  resultados: any[] = [];
  isLoading: boolean = false; 

  constructor(
    private pesquisa: PesquisaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const query = params['query'];
      if (query) {
        this.buscar(query);
      }
    });
  }

  buscar(nome: string) {
    this.isLoading = true; 
    this.pesquisa.buscarReceitaPorNome(nome).subscribe(
      (data: any) => {
        this.resultados = data.meals || [];
        this.isLoading = false; 
      },
      () => {
        this.isLoading = false; 
      }
    );
  }
}
