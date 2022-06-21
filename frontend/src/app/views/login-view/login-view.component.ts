import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/student-service/studentService';
import { student } from '../../models/student/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})

export class LoginViewComponent implements OnInit {

  hide = true;

  studentLoging!: student[];

  //função principal de login
  async login(e: Event) {

    e.preventDefault();

    const inputedCPF = (<HTMLInputElement>document.getElementById("cpf")).value;
    const inputedPassword = (<HTMLInputElement>document.getElementById("password")).value;
    const labelCpf = (<HTMLInputElement>document.getElementById("label-cpf"));

    //busca estudante pelo cpf no banco de dados
    await this.loginService.searchStudentByCpf(inputedCPF).subscribe(student => {

      if (student.length != 1) {
        labelCpf.innerText = 'CPF não encontrado!';
        labelCpf.classList.add('wrong-login');

      } else {
        labelCpf.innerText = 'CPF';
        labelCpf.classList.remove('wrong-login');
        this.studentLoging = student;
        this.passwordValidator(inputedPassword);

      }
    });



  }

  //função para validar a senha
  passwordValidator(password: string) {
    const labelPassword = (<HTMLInputElement>document.getElementById("label-password"));


    if (password == this.studentLoging[0].password) {
      labelPassword.innerText = 'Senha incorreta!';
      labelPassword.classList.add('wrong-login');

      //armazena nome do estudante no cache do navegador / sessao
      window.sessionStorage.setItem('name', `${this.studentLoging[0].name}`);
      this.router.navigate(['/home']);

    } else {
      labelPassword.innerText = 'Senha incorreta!';
      labelPassword.classList.add('wrong-login');

    }
  }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

    //escuta de click no botão
    const loginButton = (<HTMLInputElement>document.getElementById("login-button"));
    loginButton.addEventListener('click', (e) => {
      this.login(e);

    });

  }

}