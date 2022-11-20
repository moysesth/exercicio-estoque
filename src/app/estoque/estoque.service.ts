import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estoque } from '../models/estoque.interface';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(
    private http: HttpClient,
  ) { }

  getEstoque() {
    return this.http.get<Estoque[]>('https://my-json-server.typicode.com/moysesth/fake-api-estoque/estoque');
  }
}
