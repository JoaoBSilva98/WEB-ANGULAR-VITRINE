import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { CestaComprasComponent } from './cesta-compras/cesta-compras.component';
import { LoginComponent } from './login/login.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ReenvioSenhaComponent } from './reenvio-senha/reenvio-senha.component';


const routes: Routes = [
  {path:'vitrine', component:VitrineComponent},
  { path: '', redirectTo: '/vitrine', pathMatch: 'full' },
  { path: 'detalhes/:id', component: DetalheProdutoComponent },
  {path:'carrinho', component:CestaComprasComponent},
  {path:'login', component:LoginComponent},
  {path:'busca', component:PesquisaComponent},
  {path:'reenvioSenha', component:ReenvioSenhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
