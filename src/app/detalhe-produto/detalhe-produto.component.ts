import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalheProduto } from './detalhe-produto.model';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {
  produto: DetalheProduto | undefined;
  produtos: DetalheProduto[] = [
    new DetalheProduto(1, "Grimório Sol", 217.15, "Um grimório poderoso que pode chamar luz nas noites mais escuras, ou só servir para uma boa leitura.", "./assets/grim1.jpg"),
    new DetalheProduto(2, "Grimório Lua", 215.17, "Um grimório contendo conhecimento da noite, ou será que não.", "./assets/grim2.jpg"),
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      console.log('ID:', id);
      this.produto = this.produtos.find(p => p.id === id);
      console.log('Produto:', this.produto);
      if (!this.produto) {
        this.router.navigate(['/pagina-de-erro']);
      }
    });
  }
  
  
}
