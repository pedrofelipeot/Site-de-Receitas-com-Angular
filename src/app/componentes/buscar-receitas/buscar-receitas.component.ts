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
  isLoading: boolean = false; // Flag para controle de carregamento

  constructor(
    private pesquisa: PesquisaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Receber o parâmetro da URL e buscar as receitas
    this.route.queryParams.subscribe((params) => {
      const query = params['query'];
      if (query) {
        this.buscar(query);
      }
    });
  }

  buscar(nome: string) {
    this.isLoading = true; // Inicia o carregamento
    this.pesquisa.buscarReceitaPorNome(nome).subscribe(
      (data: any) => {
        this.resultados = data.meals || []; // Atribui os resultados ou uma lista vazia se não houver resultados
        this.isLoading = false; // Finaliza o carregamento
      },
      () => {
        this.isLoading = false; // Em caso de erro, finaliza o carregamento
      }
    );
  }
}
