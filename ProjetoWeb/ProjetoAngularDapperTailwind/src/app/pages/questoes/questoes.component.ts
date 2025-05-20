import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormControl,  FormGroup,  ReactiveFormsModule } from '@angular/forms';
import { Questoes } from '../../models/Questoes';

@Component({
  selector: 'app-questoes',
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule, 
  ],
  templateUrl: './questoes.component.html',
  styleUrl: './questoes.component.css'
})
export class QuestoesComponent {



  questoes: Questoes[] = [
    {enunciado:"Enunciado 01", materia: "Web", tipo:Tipo.multiplaEscolha, assunto:"assunto 01"},
    {enunciado:"teste Enunciado", materia: "Física", tipo:Tipo.objetiva, assunto:"assunto 02"},
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
export enum Tipo{
  multiplaEscolha = "Multipla Escolha",
  objetiva = "Objetiva",
}
