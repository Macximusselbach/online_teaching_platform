import { Class } from "../../models/class/class.model";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class ClassService {

  class!: Class;

  defaultGetUrl = "http://localhost:3000/class";

  constructor(private http: HttpClient) { }

  searchAllClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.defaultGetUrl);
  }

  searchClassByName(name: string): Observable<Class[]> {
    return this.http.get<Class[]>(this.defaultGetUrl + `/name/${name}`)
  }

}
