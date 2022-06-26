import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student-service/studentService';
import { Student } from 'src/app/models/student/student.model';

@Component({
  selector: 'app-perfil-view',
  templateUrl: './perfil-view.component.html',
  styleUrls: ['./perfil-view.component.css']
})
export class PerfilViewComponent implements OnInit {

  student!: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {

    const studentCpf = window.sessionStorage.getItem('cpf');
    this.studentService.searchStudentByCpf(studentCpf!).subscribe(student => {
      this.student = student;

    });



  }

}
