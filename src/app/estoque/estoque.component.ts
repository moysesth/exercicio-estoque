import { Component, OnInit } from '@angular/core';
import { EstoqueService } from './estoque.service';
import { Estoque } from '../models/estoque.interface';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  estoques: Estoque[];

  constructor(
    private estoqueService: EstoqueService
  ) { }

  ngOnInit() {
    this.estoqueService.getEstoque()
      .subscribe(response => {
        this.estoques = response
      });
  }

}
