import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/student-service/studentService';
import { student } from '../../models/student/student.model';

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

    const inputedCPF = (<HTMLInputElement>document.getElementById("cpf")).value;
    const inputedPassword = (<HTMLInputElement>document.getElementById("password")).value;

    //busca estudante pelo cpf no banco de dados
    await this.loginService.searchStudentByCpf(inputedCPF).subscribe(student => {

      if (student != null) {
        this.studentLoging = student;
        this.passwordValidator(inputedPassword);
        console.log('achou cpf');

      } else {
        e.preventDefault();
        const labelCpf = (<HTMLInputElement>document.getElementById("label-cpf"));

      }
    });



  }

  //função para validar a senha
  passwordValidator(password: string) {
    console.log(this.studentLoging);
    if (password == this.studentLoging[0].password) {
      console.log('Entrando!');

      //armazena nome do estudante no cache do navegador / sessao
      window.sessionStorage.setItem('name', `${this.studentLoging[0].name}`);

    } else {
      console.log('Senha incorreta!');

    }
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    //escuta de click no botão
    const loginButton = (<HTMLInputElement>document.getElementById("login-button"));
    loginButton.addEventListener('click', (e) => {
      this.login(e);

    });

  }

}