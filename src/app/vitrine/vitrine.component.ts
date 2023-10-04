import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetalheProduto } from '../detalhe-produto/detalhe-produto.model';


@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {
  produtos: DetalheProduto[] = [];

  constructor(private router: Router) {
    this.produtos.push(
      new DetalheProduto(
        1,
        "Grimório Sol",
        217.15,
        "Um grimório poderoso que pode chamar luz nas noites mais escuras, ou só servir para uma boa leitura.",
        "./assets/grim1.jpg"
      ),
      new DetalheProduto(
        2,
        "Grimório Lua",
        215.17,
        "Um grimório contendo conhecimento da noite, ou será que não",
        "./assets/grim2.jpg"
      ),
      new DetalheProduto(
        3,
        "Necronomicom",
        666.66,
        "Um livro maldito, dito como proibido, serve de peso de papel",
        "./assets/grim3.png"
      ),
      new DetalheProduto(
        4,
        "Grimório de Invocação",
        1350.0,
        "Aqui tem feitiços de invocação de vários tippos de familiares, o primeiro feitiço ensina a invocar gatos com o feitiço 'PssPssPss'",
        "./assets/grim4.png"
      ),
    );
  }

  verDetalhes(id: number) {
    this.router.navigate(['/detalhes', id]);
  }
}