import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllReceitasComponent } from './componentes/all-receitas/all-receitas.component';
import { HomeComponent } from './componentes/home/home.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'home', component: HomeComponent },
  { path: 'categoria/:categoriaNome', component: AllReceitasComponent},
  { path: 'detalhes/:id', component: DetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
