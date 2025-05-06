import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Provas } from '../../models/Provas';

@Component({
  selector: 'app-provas',
  imports: [
    RouterModule,
    CommonModule 
  ],
  templateUrl: './provas.component.html',
  styleUrl: './provas.component.css'
})
export class ProvasComponent {

  questoes: Provas[] = [
    {enunciado:"Enunciado 01", materia: "Web", assunto:"assunto 01"},
    {enunciado:"teste Enunciado", materia: "Física", assunto:"assunto 02"},
  ]

  search(event:Event){
    const target  = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    console.log(value);
    this.questoes = this.questoes.filter(questoeslist=>{
        return questoeslist.enunciado.toLowerCase().includes(value) || questoeslist.assunto.toLowerCase().includes(value) || questoeslist.materia.toLowerCase().includes(value);
      }
    )
  }

}
