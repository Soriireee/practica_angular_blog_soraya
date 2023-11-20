import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent {

  @Input() post: Post;

  constructor() {
    this.post = {
      id: 0, titulo: '', imagen: '', texto: '', autor: '', fecha: '', categoria: '',
    }
  }
}