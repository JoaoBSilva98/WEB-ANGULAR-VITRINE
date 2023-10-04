import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  senha: string = '';
  confirmarSenha: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  cadastroVisivel = false;

}
