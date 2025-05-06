import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuestoesComponent } from './pages/questoes/questoes.component';
import { ProvasComponent } from './pages/provas/provas.component';

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
        path:'provas',
        component: ProvasComponent
    },
  
];
