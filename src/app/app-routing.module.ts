import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { LoginComponent } from './login/login.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ReenvioSenhaComponent } from './reenvio-senha/reenvio-senha.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';


const routes: Routes = [
  {path:'vitrine', component:VitrineComponent},
  { path: '', redirectTo: '/vitrine', pathMatch: 'full' },
  { path: 'detalhes/:id', component: DetalheProdutoComponent },
  {path:'login', component:LoginComponent},
  {path:'busca', component:PesquisaComponent},
  {path:'esquecisenha', component:ReenvioSenhaComponent},
  {path:'carrinho', component:CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
