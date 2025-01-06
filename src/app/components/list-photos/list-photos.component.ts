import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/modele/Photo';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.css']
})
export class ListPhotosComponent implements OnInit {
  @Input() idAlbum!: string;
  photos: Photo[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    if (this.idAlbum) {
      this.crudService.getPhotosByAlbum(this.idAlbum).subscribe((data) => {
        this.photos = data;
      });
    }
  }
}