import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  contactForm: any;

  constructor() { }

  public cliente: Cliente = {} as Cliente

  public clientes: Cliente[] = [
    { id: 1, nome: "Bicicleta", descricao: "Bicicleta aro 26", preco: 1674.45 },
    { id: 2, nome: "Patinete", descricao: "Patinete motorizado", preco: 3529.99 },
    { id: 3, nome: "Patins", descricao: "Patins roller oldschool", preco: 399.99 }
  ]

  ngOnInit(): void {
  }

  clicou() {

    let id = this.clientes.length + 1;

    let novoCliente: Cliente = {
      id: id,
      nome: this.cliente.nome,
      descricao: this.cliente.descricao,
      preco: this.cliente.preco,
    } as Cliente

    this.clientes.push(novoCliente)
  
  }
}