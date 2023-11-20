import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';



@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.css']
})
export class DetallePostComponent {

  postSeleccionado!: Post | undefined;

  activatedRoute = inject(ActivatedRoute);
  postService = inject(PostService);
  post: any;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.postSeleccionado = this.postService.getById(parseInt(params['postId']));
    });


  }
}
