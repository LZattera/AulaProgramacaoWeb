import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuestoesComponent } from './pages/questoes/questoes.component';
import { ProvasComponent } from './pages/provas/provas.component';
import { ViewQuestoesComponent } from './pages/questoes/view-questoes/view-questoes.component';
import { ViewProvasComponent } from './pages/provas/view-provas/view-provas.component';

export const routes: Routes = [
 
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'questoes',
        component: QuestoesComponent
    },
    {
        path:'questoes/:id',
        component: ViewQuestoesComponent
    },
    {
        path:'provas',
        component: ProvasComponent
    },
    {
        path:'provas/:id',
        component: ViewProvasComponent
    },
  
];
