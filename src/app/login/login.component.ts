import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  senha: string = '';
  senha1: string = '';
  email1: string = '';
  confirmarSenha: string = '';
  cpf: string = '';
  telefone: string = '';
  nome: string = '';
  email: string = ''; 
  cadastroSucesso: boolean = false;
  loginSucesso: boolean = false;
  senhaNaoCoincide: boolean = false;
  nomePreenchido: boolean = false;
  emailPreenchido: boolean = false;
  senhaPreenchida: boolean = false;
  confirmarSenhaPreenchida: boolean = false;
  cpfPreenchido: boolean = false;
  telefonePreenchido: boolean = false;
  email1Preenchido: boolean = false;
  senha1Preenchida: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  cadastroVisivel = false;

  fazerLogin() {
    if (this.email1Preenchido && this.senha1Preenchida) {
      this.loginSucesso = true;
    }
  }

  criarConta() {
    if (this.senha === this.confirmarSenha) {
      this.cadastroSucesso = true;
      this.senhaNaoCoincide = false;
    } else {
      this.senhaNaoCoincide = true;
    }
  }

  verificarNomePreenchido() {
    this.nomePreenchido = this.senha.trim() !== '';
  }

  verificarEmailPreenchido() {
    this.emailPreenchido = this.email.trim() !== '';
  }

  verificarSenhaPreenchida() {
    this.senhaPreenchida = this.senha.trim() !== '';
  }

  verificarConfirmarSenhaPreenchida() {
    this.confirmarSenhaPreenchida = this.confirmarSenha.trim() !== '';
  }

  verificarCpfPreenchido() {
    this.cpfPreenchido = this.cpf.trim() !== '';
  }

  verificarTelefonePreenchido() {
    this.telefonePreenchido = this.telefone.trim() !== '';
  }

  verificarEmail1Preenchido() {
    this.email1Preenchido = this.email1.trim() !== '';
  }

  verificarSenha1Preenchida() {
    this.senha1Preenchida = this.senha1.trim() !== '';
  }
}




