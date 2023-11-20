import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  arrPosts: Post[] = [];
  arrCategorias: string[] = [];

  PostsService = inject(PostService);

  ngOnInit() {
    this.arrPosts = this.PostsService.getAll();
    this.arrCategorias = this.PostsService.getCategorias();
  }

  onChange($event: any) {
    this.arrPosts = this.PostsService.getByCategoria($event.target.value);
  }
}


