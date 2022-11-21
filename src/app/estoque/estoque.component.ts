import { Component, OnInit } from '@angular/core';
import { take, finalize } from 'rxjs/operators';
import { EstoqueService } from './estoque.service';
import { Estoque } from '../models/estoque.interface';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  estoques: Estoque[];
  pagina = 1 ;

  estaCarregando: boolean;
  erroCarregamento: boolean;

  constructor(
    private estoqueService: EstoqueService
  ) { }

  ngOnInit() {
    this.carregarEstoque();
  }

  carregarEstoque() {
    this.estaCarregando = true;
    this.erroCarregamento = false;

    this.estoqueService.getEstoque(this.pagina)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )

      .subscribe(
        response => this.carregado(response),
      );
  }

  carregado(response: Estoque[]) {
    this.estoques = response;
  }

  // falhaCarregamento(error: any) {
  //   this.erroCarregamento = true;
  // }

  paginaAnterior() {
    this.pagina = this.pagina - 1;
    this.carregarEstoque();
  }

  proximaPagina() {
    this.pagina = this.pagina + 1;
    this.carregarEstoque();
  }
}
