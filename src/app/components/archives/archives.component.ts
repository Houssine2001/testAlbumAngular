import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/modele/Album';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
listAlbums!: Album[];
  album!: Album;


  constructor(private service:CrudService) { }

  ngOnInit(): void {
    //get all albums
    this.album = new Album();
    this.service.getAlbums().subscribe((data: Album[]) => {
      this.listAlbums = data;
    });
  }
  

}
