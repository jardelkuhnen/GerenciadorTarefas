import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TarefaService } from './shared/tarefa.service';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListarTarefaComponent, 
    CadastrarComponent, 
    EditarTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
