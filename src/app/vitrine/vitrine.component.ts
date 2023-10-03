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
      )
    );
  }

  verDetalhes(id: number) {
    this.router.navigate(['/detalhes', id]);
  }
}
