import { Component, OnInit } from '@angular/core';
import { student } from '../../models/student/student.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({})

export class LoginService {

  Student!: student;

  defaultGetUrl = "http://localhost:4000/student";

  constructor(private http: HttpClient) { }

  read(): Observable<student[]> {
    return this.http.get<student[]>(this.defaultGetUrl);    
  }
}
