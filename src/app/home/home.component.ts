import { Component, OnInit } from '@angular/core';
import { Estoque } from '../models/estoque';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  exibirEstoque = false
  exibirAdd = false
  exibirEdit = false
  exibirDelet = false

  contId = 0;

  arrayLista: Estoque[] = []

  editId: number = 0
  editNome: string = ''
  editDescricao: string = ''
  editPreco: number = 0

  id: number = 0
  nome: string = ''
  descricao: string = ''
  preco: number = 0

  constructor() { }

  //   public estoques: Estoque[] = [
  //   { id: 1, nome: "Bicicleta", descricao: "Bicicleta aro 26", preco: 1674.45 },
  //   { id: 2, nome: "Patinete", descricao: "Patinete motorizado", preco: 3529.99 },
  //   { id: 3, nome: "Patins", descricao: "Patins roller oldschool", preco: 399.99 }
  // ]

  ngOnInit(): void {
  }

  addItem(id: number, nome: string, descricao: string, preco: number) {
    let addEstoque = { id: id, nome: nome, descricao: descricao, preco: preco }
    this.arrayLista.push(addEstoque)
    this.contId++
  }

  editItem(id: number, nome: string, descricao: string, preco: number) {
    let editItem = this.arrayLista.find(x => x.id == id)
    console.log(editItem)
    if (this.arrayLista[id].id) { if (editItem?.id) { editItem.id = id } }
    if (this.arrayLista[id].nome) { if (editItem?.nome) { editItem.nome = nome } }
    if (this.arrayLista[id].descricao) { if (editItem?.descricao) { editItem.descricao = descricao } }
    if (this.arrayLista[id].preco) { if (editItem?.preco) { editItem.preco = preco } }
  }

  deletItem() {
    this.arrayLista.pop()
    this.contId--
    console.log(this.arrayLista)
  }


  exibirLista() {

    this.exibirEstoque = this.exibirEstoque ? false : true;

  }

  showAdd() {
    this.exibirAdd = this.exibirAdd ? false : true;
  }

  showEdit() {
    this.exibirEdit = this.exibirEdit ? false : true;
    this.exibirEstoque = this.exibirEstoque ? false : true;
  }

  showDelet() {
    this.exibirDelet = this.exibirDelet ? false : true;
  }
}