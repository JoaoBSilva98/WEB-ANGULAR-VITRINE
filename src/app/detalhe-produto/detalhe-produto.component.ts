import { Component } from '@angular/core';
import { DetalheProduto } from './detalhe-produto.model';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent {
  produtos: DetalheProduto[] = [];

  constructor() {
    this.produtos.push(
      new DetalheProduto(
        1,
        "Grimório Sol",
        217.15,
        "Um grimório poderoso que pode chamar luz nas noites mais escuras, ou só servir para uma boa leitura."
      ),
      // Adicione mais produtos aqui
    );
  }
}
