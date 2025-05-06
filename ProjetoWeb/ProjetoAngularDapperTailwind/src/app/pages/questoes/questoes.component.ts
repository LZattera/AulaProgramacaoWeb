import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-questoes',
  imports: [
    RouterModule,
    CommonModule 
  ],
  templateUrl: './questoes.component.html',
  styleUrl: './questoes.component.css'
})
export class QuestoesComponent {

}
