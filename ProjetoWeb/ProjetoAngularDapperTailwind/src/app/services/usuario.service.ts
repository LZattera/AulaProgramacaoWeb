import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questoes } from '../models/Questoes';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ApiUrl = environment.UrlApi;

  constructor(
    private http: HttpClient
  ) { }

  getUsuario(id:number): Observable<any> {
    return this.http.get(`${this.ApiUrl}Questao/getTask/${id}`);
  }

  saveQuestao(frm: Questoes): Observable<any>{
    console.log(`${this.ApiUrl}Questao`);
    return this.http.post(`${this.ApiUrl}Questao`, frm);
  }

}
