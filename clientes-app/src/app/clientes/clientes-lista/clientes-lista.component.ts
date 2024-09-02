import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

clientes : Cliente[] = [];
clienteSelecionado : Cliente; 
mensagemSucesso : String; 
mensagemErro : String; 

  constructor( private service: ClientesService, 
    private router: Router) { }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe(
      response => this.clientes = response 
    ); 
  }

  novoCadastro(){
    this.router.navigate(['/clientes/form'])
  }

  preparaExclusao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  excluirCliente() {
    this.service.excluir(this.clienteSelecionado)
    .subscribe( 
      response => {
        this.mensagemSucesso = 'Cliente excluido com sucesso!';
        this.ngOnInit();
      }, 
      errorResponse => this.mensagemErro = 'Ocorreu um erro ao excluir o cliente.'
      )
  }
}
