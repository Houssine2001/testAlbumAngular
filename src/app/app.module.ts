import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { ListPhotosComponent } from './components/list-photos/list-photos.component';


const routes: Routes = [

  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'albums', component: ListAlbumsComponent},
  {path: 'archives', component: ArchivesComponent},
  {path: 'album/add', component: AddAlbumComponent},
  { path: 'list-photos/:id', component: ListPhotosComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddAlbumComponent,
    AlbumsComponent,
    ArchivesComponent,
    ListAlbumsComponent,
    ListPhotosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
