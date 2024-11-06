import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllReceitasComponent } from './componentes/all-receitas/all-receitas.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  {path: 'categoria/:categoriaNome', component: AllReceitasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
