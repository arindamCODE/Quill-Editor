import { PutService } from './../put.service';
import { GetIndiService } from './../get.indi.service';
import { ContentID } from './../ContentID';
import { PreResultComponent } from './../pre-result/pre-result.component';
import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public content: ContentID;
  id: number;
  con: string;
  tags: string;

  constructor(private http: Http, private obj: GetIndiService, private obj1: PutService) {

    console.log('this is inside constructor');
    this.content = obj.content1;
    console.log(obj.content1);
    console.log(this.content);
     
  }
  
  
  ngOnInit() {
     
  }

  update(id: number, con: string, tags: string)
  {
    this.id = id;
    this.con = con;
    this.tags = tags;
    this.obj1.putContent(this.id, this.con, this.tags);
  }
}