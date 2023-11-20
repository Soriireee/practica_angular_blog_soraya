import { Injectable } from '@angular/core';
import { POSTS } from '../db/post.db'
import { Post } from '../interfaces/post.interface'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post: Post[] = [];
  arrPosts: Post[] = POSTS;

  create(post: Post) {
    POSTS.push(post);
    console.log(POSTS)

  }

  getAll(): Post[] {
    return POSTS;
  }

  getCategorias(): string[] {
    return [...new Set(POSTS.map(post => post.categoria))];
  }

  getByCategoria(categoria: string): Post[] {
    return POSTS.filter(post => post.categoria === categoria)
  }

  getById(postId: number): Post | undefined {
    return POSTS.find(post => post.id === postId);
  }
}








/*
- formulario tipo model. 
- receta que le paso para hacer formulario de tipo de model
- pasarle la inform al servicio
- funcion inject
- push en el array
*/