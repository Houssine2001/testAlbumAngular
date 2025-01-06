import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../modele/Album';
import { Photo } from '../modele/Photo';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiUrl = 'http://localhost:3000/albums';
  constructor(private http: HttpClient) { }

  //get all albums
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  //add album
  postAlbums(album: Album) {
    return this.http.post('http://localhost:3000/albums', album);
  }

  //delete album
  deleteAlbums(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // get photos by album
  getPhotosByAlbum(albumId: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`http://localhost:3000/photos?albumId=${albumId}`);
  }

}
