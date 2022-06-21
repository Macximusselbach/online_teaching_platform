import { turma } from "../models/turma.model";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class LoginService {

  turma!: turma;

  defaultGetUrl = "http://localhost:3000/turma";

  constructor(private http: HttpClient) { }

  searchTurma(): Observable<turma[]> {
    return this.http.get<turma[]>(this.defaultGetUrl);
  }

  searchStudentByNome(name: string): Observable<turma[]> {
    return this.http.get<turma[]>(this.defaultGetUrl + `/name/${name}`)
  }

}
