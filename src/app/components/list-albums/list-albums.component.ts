import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Album } from 'src/app/modele/Album';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {
  listAlbums!: Album[];
  album!: Album;
  selectedAlbumId!: string;

  @Output() albumSelected = new EventEmitter<string>();

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.album = new Album();
    this.service.getAlbums().subscribe((data: Album[]) => {
      this.listAlbums = data;
    });
  }

  deleteAlbums(id: string) {
    this.service.deleteAlbums(id).subscribe(() => {
      this.listAlbums = this.listAlbums.filter(p => p.id !== id);
    });
  }

  onAlbumClick(id: string) {
    this.selectedAlbumId = id;
    this.albumSelected.emit(id);
  }
}