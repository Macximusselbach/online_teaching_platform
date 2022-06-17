import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})

export class LoginViewComponent implements OnInit {

  hide = true;

  login(e: Event) {

    const loginCPF = (<HTMLInputElement>document.getElementById("cpf")).value;
    const loginPassword = (<HTMLInputElement>document.getElementById("password")).value;

    console.log("Logando com o cpf " + loginCPF + " e senha " + loginPassword);

    e.preventDefault();
  }

  constructor() { }

  ngOnInit(): void {

    const student = '';

    const loginButton = (<HTMLInputElement>document.getElementById("login-button"));
    loginButton.addEventListener('click', (e) => {
      this.login(e);
      
    });

  }

}