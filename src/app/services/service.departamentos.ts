import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServiceDepartamentos {
  url = environment.urlDepartamentos;
  constructor(private _http: HttpClient) {}

  getDepartamentos(): Observable<Departamento[]> {
    let request = '/api/Departamentos';
    return this._http.get<Departamento[]>(this.url + request);
  }

  //se pdria hacer solo con post pero porque el back es en netcore , si fuese java quizas no
  createDepartamento(departamento: Departamento): Observable<Departamento> {
    let json = JSON.stringify(departamento);
    let header = new HttpHeaders();
    header = header.set('content-type', 'application/json');
    let request = '/api/Departamentos';
    return this._http.post<Departamento>(this.url + request, json, { headers: header });
  }

  findDepartamento(id: number): Observable<Departamento> {
    let request = 'api/departamentos/' + id;
    return this._http.get<Departamento>(this.url + request);
  }

  updateDepartamento(departamento: Departamento): Observable<Departamento> {
    let json = JSON.stringify(departamento);
    let header= new HttpHeaders().set('content-type','application/json')
    let request = '/api/Departamentos';
    console.log(json)
    return this._http.put<Departamento>(this.url + request, json,{headers:header});
  }

  deleteDepartamento(id:number):Observable<any>{
    let request='api/departamentos/'+id
    return this._http.delete<any>(this.url+request)
  }

  
}
