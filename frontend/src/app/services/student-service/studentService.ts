import { Student } from '../../models/student/student.model';
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class StudentService {

  student!: Student;

  defaultGetUrl = "http://localhost:3000/student";

  constructor(private http: HttpClient) { }

  searchStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.defaultGetUrl);
  }

  searchStudentByCpf (cpf: string): Observable<Student[]> {
    return this.http.get<Student[]>(this.defaultGetUrl + `/cpf/${cpf}`)
  }

}
