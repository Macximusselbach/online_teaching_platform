import { student } from '../../models/student/student.model';
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class LoginService {

  student!: student;

  defaultGetUrl = "http://localhost:3000/student";

  constructor(private http: HttpClient) { }

  searchStudents(): Observable<student[]> {
    return this.http.get<student[]>(this.defaultGetUrl);
  }

  searchStudentByCpf (cpf: string): Observable<student[]> {
    return this.http.get<student[]>(this.defaultGetUrl + `/cpf/${cpf}`)
  }

}
