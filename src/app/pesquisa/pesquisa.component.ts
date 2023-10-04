import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalheProduto } from '../detalhe-produto/detalhe-produto.model';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  produtosEncontrados: DetalheProduto[] = [];
  produtos: DetalheProduto[] = [
    new DetalheProduto(1, "Grimório Sol", 217.15, "Um grimório poderoso que pode chamar luz nas noites mais escuras, ou só servir para uma boa leitura.", "./assets/grim1.jpg"),
    new DetalheProduto(2, "Grimório Lua", 215.17, "Um grimório contendo conhecimento da noite, ou será que não.", "./assets/grim2.jpg"),
    new DetalheProduto(3, "Necronomicom", 666.66,"Um livro maldito, dito como proibido, serve de peso de papel", "./assets/grim3.png"),
    new DetalheProduto(4,"Grimório de Invocação", 1350.0, 
    "Aqui tem feitiços de invocação de vários tipos de familiares, o primeiro feitiço ensina a invocar gatos com o feitiço 'PssPssPss'", "./assets/grim4.png"),
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchText = params['query'];

      if (searchText) {
        this.produtosEncontrados = this.buscarProdutos(searchText);
      } else {
        this.produtosEncontrados = this.produtos;
      }
    });
  }

  buscarProdutos(query: string): DetalheProduto[] {
    return this.produtos.filter(produto =>
      produto.nome.toLowerCase().includes(query.toLowerCase())
    );
  }
}
