import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ApiUrl = environment.UrlApi;

  constructor(
    private http: HttpClient
  ) { }

  getUsuario(id:number): Observable<any> {
    return this.http.get(`${this.ApiUrl}questao/${id}`);
  }

}
