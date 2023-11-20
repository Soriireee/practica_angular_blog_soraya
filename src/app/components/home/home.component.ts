import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

