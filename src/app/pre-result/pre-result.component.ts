import { IsDeleteService } from './../IsDelete.service';
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

export class PreResultComponent implements OnInit 
{
  public content: ContentID[];
  public content1: ContentID[];

  public url: string = 'http://localhost:5000/api/content';

  public favourite: boolean;
  public favourite1: boolean;
  
  public con2: ContentID;

  public con5: ContentID;
  public sample: string;
  public limit: number = 200;
  public dots: string = "....";
  
  public idDel: number;
  public conDel: string;
  public tagDel: string;
  public favDel: boolean;
  public userDel: string;
  public isDel: boolean; 

  constructor(private http: Http, private obj: GetIndiService, private obj1: DeleteService, private obj2: PutFavService, private obj3: ViewService, private obj4: RemoveFavService, private obj5: IsDeleteService)
  {

    http.get(this.url).subscribe(result => {
      this.content = result.json() as ContentID[];
      this.content1 = this.content.filter(obj => obj.isDelete == false);
    }, error => console.error(error));
  }

  edit(con: ContentID)
  {
    console.log(con);
    this.obj.setContent(con);
  }

  view(content: ContentID)
  {
    this.con2 = content;
    this.favourite = true;
    this.favourite1 = false;
    this.obj3.show(this.con2);
    this.obj2.setFavContent(this.con2.id, this.con2.value,this.con2.metaTags, this.favourite, this.con2.users, this.con2.isDelete);
    this.obj4.setFavContent(this.con2.id, this.con2.value, this.con2.metaTags, this.favourite1, this.con2.users, this.con2.isDelete);
  }

  addDots(con: ContentID)
  {
    this.sample = con.value;
    if(this.sample.length > this.limit)
      {
        this.sample = this.sample.substring(0, this.limit) + this.dots;
      }
      return this.sample;
  }

  preDelete(content: ContentID)
  {
    this.con5 = content;

    this.idDel = this.con5.id;
    this.conDel = this.con5.value;
    this.tagDel = this.con5.metaTags;
    this.favDel = this.con5.favourites;
    this.userDel = this.con5.users;
    this.isDel = this.con5.isDelete;

    this.obj5.setDelContent(this.idDel, this.conDel, this.tagDel, this.favDel, this.userDel, this.isDel);    
  }

  delete()
  {
    this.obj5.putDelContent();
    window.location.reload();
  }

  ngOnInit() {}
}