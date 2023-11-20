import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { DetallePostComponent } from './pages/detalle-post/detalle-post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'post', component: ListaPostsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: FormularioComponent },
  { path: 'detalle/:postId', component: DetallePostComponent },
  { path: '**', redirectTo: '/home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

