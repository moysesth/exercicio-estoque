import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor() { }

  public cliente: Cliente = {} as Cliente

  public clientes: Cliente[] = [
    { id: 1, nome: "Leandro", telefone: 15993110130, endereco: "Rua teste 123", data: new Date(), valor: 33.45, cpf: "54717284321" },
    { id: 2, nome: "Marcia", telefone: 12968241823, endereco: "Rua av 123", data: new Date(), valor: 4533, cpf: "74459885301" },
    { id: 3, nome: "Livinia", telefone: 14968421256, endereco: "Rua florida 123", data: new Date(), valor: 1269.03, cpf: "54802121687" }
  ]

  ngOnInit(): void {
    this.cliente = this.clientes[0];
  }

  clicou() {

    let id = this.clientes.length + 1;
    
    let novoCliente: Cliente = {
      id: id,
      nome: this.cliente.nome,
      cpf: this.cliente.cpf,
      telefone: this.cliente.telefone,
      endereco: this.cliente.endereco,
      data: new Date(),
      valor: this.cliente.valor,
    } as Cliente

    this.clientes.push(novoCliente)
  }
}