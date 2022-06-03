import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})

export class LoginViewComponent implements OnInit {

  hide = true;

  login() {

    const loginCPF = (<HTMLInputElement>document.getElementById("cpf")).value;
    const loginPass = (<HTMLInputElement>document.getElementById("password")).value;


    console.log("Logando com o cpf " + loginCPF + " e senha " + loginPass);
  }

  constructor() { }

  ngOnInit(): void {

  }

}