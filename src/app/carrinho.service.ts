import { Injectable } from '@angular/core';
import { DetalheProduto } from './detalhe-produto/detalhe-produto.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinhoKey = 'carrinho';
  private itens: { produto: DetalheProduto; quantidade: number }[] = [];
  private itensSubject = new BehaviorSubject<{ produto: DetalheProduto; quantidade: number }[]>(this.itens);

  constructor(private router: Router) {
    const carrinhoJson = localStorage.getItem(this.carrinhoKey);
    this.itens = carrinhoJson ? JSON.parse(carrinhoJson) : [];
    this.atualizarItensSubject();
  }

  obterItensCarrinho(): { produto: DetalheProduto; quantidade: number }[] {
    const carrinhoJson = localStorage.getItem(this.carrinhoKey);
    return carrinhoJson ? JSON.parse(carrinhoJson) : [];
  }
  adicionarItem(produto: DetalheProduto) {
    const carrinhoAtual = this.obterItensCarrinho();
    const itemExistente = carrinhoAtual.find(item => item.produto.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      carrinhoAtual.push({ produto, quantidade: 1 });
    }
    
    localStorage.setItem(this.carrinhoKey, JSON.stringify(carrinhoAtual));
    this.atualizarItensSubject(); 

  }

  removerItem(produto: DetalheProduto) {
    const index = this.itens.findIndex(item => item.produto.id === produto.id);
  
    if (index !== -1) {
      this.itens.splice(index, 1);
      localStorage.setItem(this.carrinhoKey, JSON.stringify(this.itens)); 
      this.atualizarItensSubject(); 
    }
  }

  removerItemPorIndice(indice: number) {
    if (indice >= 0 && indice < this.itens.length) {
      this.itens.splice(indice, 1);
      localStorage.setItem(this.carrinhoKey, JSON.stringify(this.itens));
      this.atualizarItensSubject();
    }
  }

  calcularTotal() {
    return this.itens.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.removeItem(this.carrinhoKey);
    this.atualizarItensSubject();
  }
  getItensCarrinhoObservable() {
    return this.itensSubject.asObservable();
  }

  private atualizarItensSubject() {
    this.itensSubject.next(this.itens);
  }

  getItensCarrinho(): { produto: DetalheProduto; quantidade: number }[] {
    return this.itens;
  }

 
}
