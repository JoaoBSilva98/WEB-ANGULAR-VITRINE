import { Component } from '@angular/core';
import { DetalheProduto } from '../detalhe-produto/detalhe-produto.model';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {
  produtos: DetalheProduto[] = [
    {
      id: 1,
      nome: 'Produto 1',
      descricao: 'Descrição do Produto 1',
      preco: 19.99,
      imagemUrl: './assets/grim1.jpg'
    },
    {
      id: 2,
      nome: 'Produto 2',
      descricao: 'Descrição do Produto 2',
      preco: 29.99,
      imagemUrl: './assets/produto2.jpg'
    },
  ];
}
