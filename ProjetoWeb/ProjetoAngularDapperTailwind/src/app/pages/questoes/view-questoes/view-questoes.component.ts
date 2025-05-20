import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-view-questoes',
  imports: [
    FormsModule ,
   CommonModule,
    ReactiveFormsModule, 
  ],
  templateUrl: './view-questoes.component.html',
  styleUrl: './view-questoes.component.css'
})
export class ViewQuestoesComponent {
  
  frm: any = FormGroup;
  lstAlternativas: Alternativa[] = [];

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
   this.CriarFormulario();
  }

  CriarFormulario(){
    this.frm = this.fb.group({
          enunciado: new FormControl(''),
          materia: new FormControl(''),
          tipo: new FormControl(1),
          assunto: new FormControl(''),
          alternativas: new FormControl('')
        });
  }
  save(){
    console.log(this.lstAlternativas);
    console.log(JSON.stringify(this.lstAlternativas));
    // Aqui você pode adicionar a lógica para salvar os dados do formulário
    const jsonAlternativas = JSON.stringify(this.lstAlternativas)
    this.frm.value.alternativas = jsonAlternativas;
    
    console.log(this.frm.value);

    this.usuarioService.saveQuestao(this.frm.value).subscribe({});


  }
  RemoveAlternativa(index: number) {  
    this.lstAlternativas.splice(index, 1);
  }

  AddAlternativa(){
    this.lstAlternativas.push(new Alternativa());
  }
}

export class Alternativa {
  alternativa: string = '';
  respostaCorreta: boolean = false;
  constructor(object?: Partial<Alternativa>) {
    if (object) { 
      Object.assign(this, object);
    }
  }
}