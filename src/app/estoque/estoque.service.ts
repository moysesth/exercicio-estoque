import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estoque } from '../models/estoque.interface';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
  ) { }

  getEstoque(pagina: number) {
    return this.http.get<Estoque[]>(`${this.API_URL}/estoque`, {
      params: {
        _page: String(pagina),
      }
    });
  }
}
