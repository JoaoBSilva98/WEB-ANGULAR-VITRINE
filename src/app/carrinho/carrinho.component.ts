import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { DetalheProduto } from '../detalhe-produto/detalhe-produto.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  compraFinalizadaMsgVisible: boolean = false;
  itensCarrinho: { produto: DetalheProduto; quantidade: number }[] = [];
  
  constructor(public carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.getItensCarrinho();
    this.carrinhoService.getItensCarrinhoObservable().subscribe((itens) => {
      this.itensCarrinho = itens;
    });
  }
  compraFinalizada() {
    this.compraFinalizadaMsgVisible = true;
    this.limparCarrinho();
  }

  limparCarrinho() {
    this.carrinhoService.limparCarrinho();
    this.itensCarrinho = [];
  }

  removerItem(indice: number) {
    this.carrinhoService.removerItemPorIndice(indice);
  }
}
