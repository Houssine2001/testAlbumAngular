import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/modele/Album';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {
  album: Album;
  albums: Album[] = [];
  constructor(private crud:CrudService) {
    this.album = new Album();
   }

  ngOnInit(): void {
  }

  onSubmit(album: Album){
    album.archived = 0;
 album.creationDate = new Date();
 this.crud.postAlbums(this.album).subscribe();
  }

}
