import { RemoveFavService } from './../remove.fav.service';
import { ViewService } from './../view.service';
import { ViewComponent } from './../view/view.component';
import { PutFavService } from './../put.fav.service';
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
  public index: number;
  public con: string;
  public favourite: boolean;
  public favourite1: boolean;
  public users: string;
  public con2: ContentID;
  public con3: ContentID; 

  constructor(private http: Http, private obj: GetIndiService, private obj1: DeleteService, private obj2: PutFavService, private obj3: ViewService, private obj4: RemoveFavService)
  {

    http.get(this.url).subscribe(result => {
      this.content = result.json() as ContentID[];
    }, error => console.error(error));
  }

  edit(con: ContentID)
  {
    console.log(con);
    
    this.obj.setContent(con);
    
    /* this.id = con.id;
    this.ID = this.id.toString();
    this.url2 = `${this.url}/${this.ID}`;
    console.log(this.ID);
    console.log(this.url2);
    this.obj.getContent(this.url2); */ 
  }

  delete(id: number)
  {
     this.id2 = id;
     console.log(this.id2);
     this.obj1.deleteContent(this.id2);
     window.location.reload();  
  }

  view(content: ContentID)
  {
    this.con2 = content;
    this.favourite = true;
    this.favourite1 = false;
    this.obj3.show(this.con2);
    this.obj2.setFavContent(this.con2.id, this.con2.content,this.con2.metaTags, this.favourite, this.con2.users);
    this.obj4.setFavContent(this.con2.id, this.con2.content, this.con2.metaTags, this.favourite1, this.con2.users);
  }
  ngOnInit() {
     
  }


}