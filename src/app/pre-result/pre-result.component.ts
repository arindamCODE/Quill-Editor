import { DeleteService } from './../delete.service';
import { EditComponent } from './../edit/edit.component';
import { GetIndiService } from './../get.indi.service';
import { ContentID } from './../ContentID';
import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-pre-result',
  templateUrl: './pre-result.component.html',
  styleUrls: ['./pre-result.component.css']
})

export class PreResultComponent implements OnInit {

  public ID: string;
  public id: number;
  public id2: number;
  public id3: number;
  public content: ContentID[];
  public url: string = 'http://localhost:5000/api/content';
  public url2: string;
  public value: string;
  public tags: string;

  constructor(private http: Http, private obj: GetIndiService, private obj1: DeleteService)
  {

    http.get(this.url).subscribe(result => {
      this.content = result.json() as ContentID[];
    }, error => console.error(error));
  }

  edit(ContentId: number)
  {
    
    this.id = ContentId;
    this.ID = this.id.toString();
    this.url2 = `${this.url}/${this.ID}`;
    console.log(this.url2);
    this.obj.getContent(this.url2); 
  }

  delete(id: number)
  {
     this.id2 = id;
     console.log(this.id2);
     this.obj1.deleteContent(this.id2);
     window.location.reload();  
  }

  ngOnInit() {
     
  }


}
