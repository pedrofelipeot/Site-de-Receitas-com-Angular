import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AllReceitasComponent } from './componentes/all-receitas/all-receitas.component';
import { DetalhesComponent } from './componentes/detalhes/detalhes.component';
import { LimitarPipe } from './pipes/limitar.pipe';
import { BuscarReceitasComponent } from './componentes/buscar-receitas/buscar-receitas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllReceitasComponent,
    DetalhesComponent,
    LimitarPipe,
    BuscarReceitasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
