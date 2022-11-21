import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estoque } from '../models/estoque.interface';
import { AddItemComponent } from './add-item.component';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
  ) { }

  addEstoque() {
    return this.http.post<Estoque[]>(`${this.API_URL}/estoque`, {
    });
  }
}
