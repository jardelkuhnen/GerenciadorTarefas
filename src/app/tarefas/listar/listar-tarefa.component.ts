import { Component, OnInit } from '@angular/core';

import { Tarefa } from './../shared/tarefa.model';
import { TarefaService } from './../shared/tarefa.service';


@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();//Bloqueia a atualizaçao da pagina automatica quando clicado no botao remover 
    if(confirm('Deseja remover a tarefa: "' + tarefa.nome + '" ?')){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if(confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '" ?')){
      this.tarefaService.atualizaStatus(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();      
    }
  }    
  
}
