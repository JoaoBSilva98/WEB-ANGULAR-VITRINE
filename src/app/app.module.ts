import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { CestaComprasComponent } from './cesta-compras/cesta-compras.component';
import { LoginComponent } from './login/login.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ReenvioSenhaComponent } from './reenvio-senha/reenvio-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    DetalheProdutoComponent,
    CestaComprasComponent,
    LoginComponent,
    PesquisaComponent,
    ReenvioSenhaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
