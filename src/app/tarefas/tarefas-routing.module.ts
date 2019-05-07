import { Routes } from '@angular/router';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'terafas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarComponent
    }
];
