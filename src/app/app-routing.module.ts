import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllReceitasComponent } from './componentes/all-receitas/all-receitas.component';
import { HomeComponent } from './componentes/home/home.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { BuscarReceitasComponent } from './componentes/buscar-receitas/buscar-receitas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'home', component: HomeComponent },
  { path: 'categoria/:categoriaNome', component: AllReceitasComponent},
  { path: 'detalhes/:id', component: DetalhesComponent },
  { path: 'busca', component: BuscarReceitasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
