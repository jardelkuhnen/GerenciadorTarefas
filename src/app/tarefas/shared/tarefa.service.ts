import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Tarefa } from './tarefa.model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:8080/api/tasks';

  listarTodos(): Observable<any> {
      // const tarefas = localStorage['tarefas'];
      // return tarefas ? JSON.parse(tarefas) : [];
      let url = this.baseUrl + '/listAll';
      return this.httpClient.get<Tarefa[]>(url);
  }

  cadastrar(tarefa: Tarefa): void{
    // const tarefas = this.listarTodos();
    // tarefa.id = new Date().getTime();
    // tarefas.push(tarefa);
    // localStorage['tarefas'] = JSON.stringify(tarefas);
    let url = this.baseUrl + '/save'
    this.httpClient.post<Tarefa>(url, tarefa).subscribe(r=>{});
  } 

  buscarPorId(id: number): Tarefa {
    // const tarefas: Tarefa[] = this.listarTodos();
    // return tarefas.find(tarefa => tarefa.id === id);
    return null;
  }

  atualizar(tarefa: Tarefa): void{
    // const tarefas: Tarefa[] = this.listarTodos();
    // tarefas.forEach((obj, index, objs) => {
    //     if(tarefa.id === obj.id){
    //       objs[index] = tarefa;
    //     }
    // });
    // localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void{
    // let tarefas: Tarefa[] = this.listarTodos();
    // tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    // localStorage['tarefas'] = JSON.stringify(tarefas);

    let url = this.baseUrl + '/delete';
    const params = new HttpParams().set('id', JSON.stringify(id));
    this.httpClient.delete(url, {params}).subscribe();
  }

  atualizaStatus(id: number): void{
    // const tarefas: Tarefa[] = this.listarTodos();
    // tarefas.forEach((obj, index, objs) => {
    //   if(id === obj.id){
    //     objs[index].concluida = !obj.concluida; 
    //   }
    // });
    // localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
