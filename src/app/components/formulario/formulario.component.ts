import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup;
  PostsService = inject(PostService);

  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl(null,
        [Validators.required]
      ),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categorias: new FormControl(),
    });
  }

  onSubmit() {
    this.PostsService.create(this.formulario.value)
    /* console.log(this.formulario.value); */
  }

  checkError(controlTitulo: string, errorTitulo: string) {
    return this.formulario.get(controlTitulo)?.hasError(errorTitulo) && this.formulario.get(controlTitulo)?.touched;
  }
}

