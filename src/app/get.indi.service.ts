import { ContentID } from './ContentID';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GetIndiService 
{
    public url: string;
    public content: ContentID;
    public content1: ContentID;
    data: any;
    constructor(private http: Http) {}  

    /* getContent(url: string)
    {
        this.url = url; 

        this.http.get(this.url).subscribe(result => {
            this.content = result.json() as ContentID;
            console.log(this.content);
            console.log(this.url);
            this.setContent(this.content);
        }, error => console.error(error)); */
      //  this.http.get(this.url).map(content => this.content); 
    /* } */

    setContent(content: ContentID)
    {
        this.content1 = content;
        console.log(this.content1);
    }
}