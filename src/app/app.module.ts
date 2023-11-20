import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { FormularioComponent } from './components/formulario/formulario.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CardPostComponent } from './components/card-post/card-post.component';
import { HomeComponent } from './components/home/home.component';
import { DetallePostComponent } from './pages/detalle-post/detalle-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ListaPostsComponent,
    FormularioComponent,
    CardPostComponent,
    HomeComponent,
    DetallePostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
