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

  getDepartamentoId(id: number): Observable<Departamento> {
    let request = '/api/Departamentos/' + id;
    return this._http.get<Departamento>(this.url + request);
  }

  createDepartamento(departamento: Departamento): Observable<Departamento> {
    let json = JSON.stringify(departamento);
    let header = new HttpHeaders();
    header = header.set('content-type', 'application/json');
    let request = '/api/Departamentos';
    return this._http.post<Departamento>(this.url + request, json,{headers:header});
  }

  updateDepartamento(departamento: Departamento): Observable<Departamento> {
    let request = '/api/Departamentos';
    return this._http.put<Departamento>(this.url + request, departamento);
  }
}
