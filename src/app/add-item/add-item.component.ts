import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { EstoqueService } from '../estoque/estoque.service';
import { AddItemService } from './add-item.services';
import { Estoque } from '../models/estoque.interface';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})


export class AddItemComponent implements OnInit {

  estoques: Estoque[];

  contId = 0;

  id: number = 0
  nome: string = ''
  descricao: string = ''
  preco: number = 0

  constructor(
    private estoqueService: EstoqueService,
    private addItemService: AddItemService
  ) { }

  ngOnInit(): void {
  }

  adicionarItem(id: number, nome: string, descricao: string, preco: number) {
    this.addItemService.addEstoque();
    console.log(this.adicionarItem);
    this.contId++;
  }

  // addItem(id: number, nome: string, descricao: string, preco: number) {
  //   this.addItemService.addEstoque()
  //   let addEstoque = { id: id, nome: nome, descricao: descricao, preco: preco }
  //   // this.estoques.push(addEstoque)
  //   this.contId++
  // }

// carregarEstoque() {
//     this.estaCarregando = true;
//     this.erroCarregamento = false;

//     this.estoqueService.getEstoque(this.pagina)
//       .pipe(
//         take(1),
//         finalize(() => this.estaCarregando = false)
//       )

//       .subscribe(
//         response => this.carregado(response),
//       );
//   }
}
