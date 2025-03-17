
# Site de Receitas com Angular

Este projeto Angular consome a API externa **TheMealDB** para exibir receitas culinárias, permitindo que os usuários explorem pratos, filtrem por categorias e visualizem detalhes como ingredientes e instruções de preparo. Utilizando funcionalidades do Angular, como **serviços** para requisições HTTP, **pipes** para formatação de dados e **componentes reutilizáveis**. Ele resolve o problema de busca manual por receitas, oferecendo uma interface intuitiva para encontrar pratos de forma rápida.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **HTML**
- **CSS**
- **Angular** 
- **TypeScript**
- **HttpClient** (para consumir a API)

## 📌 Funcionalidades

- 🔍 Busca de receitas por nome
- 📝 Modo de preparo em texto e vídeo
- 📊 Receitas recomendadas 
- ⚡ Busca de receitas por categorias

## 🎯 Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- **Node.js**
- **Angular CLI** (caso não tenha, instale com `npm install -g @angular/cli`)

## 📦 Instalação e Execução

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seuusuario/repositorio.git
    ```

2. **Acesse a pasta do projeto**:
    ```bash
    cd nome-do-projeto
    ```

3. **Instale as dependências**:
    ```bash
    npm install
    ```

4. **Inicie o servidor Angular**:
    ```bash
    ng serve
    ```
    O projeto estará disponível em **`http://localhost:4200/`**.

## 🌐 Configuração da API Externa

O projeto consome dados de uma API externa.

- **URL da API no código**:  
  No Angular, a URL da API é configurada diretamente dentro do **service**.  
  Exemplo:

  ```ts
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable, forkJoin } from 'rxjs';

  @Injectable({
    providedIn: 'root',
  })
  export class ReceitasService {
    private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

    constructor(private http: HttpClient) {}

    getCategorias(): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/categories.php`);
    }

    getReceitasPorCategoria(categoria: string): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/filter.php?c=${categoria}`);
    }

    getDetalhesReceita(id: string): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/lookup.php?i=${id}`);
    }

    getRandomRecipes(): Observable<any[]> {
      const randomRecipeRequests = Array(5).fill(null).map(() => 
        this.http.get<any>(`${this.baseUrl}/random.php`)
      ); 
      return forkJoin(randomRecipeRequests); 
    }
  } 
---

## 📜 Licença  

Este projeto está licenciado sob a **Licença MIT**. Veja o arquivo [LICENSE](https://github.com/pedrofelipeot/Site-de-Receitas-com-Angular/blob/master/LICENSE) para mais detalhes.  

---


## 🤝 Contribuição  

Se deseja contribuir com melhorias, siga estas etapas:  

1. Faça um **fork** do repositório.  
2. Crie uma branch para sua modificação:  
   ```bash
   git checkout -b minha-mudanca
3. Faça suas alterações e commit:
   ```bash
   git commit -m "Adicionando nova funcionalidade" 
 4. Envie um **Pull Request**.
