import { ContentID } from './ContentID';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GetIndiService 
{
    public url: string;
    content: ContentID;

    data: any;
    constructor(private http: Http) {}  

    getContent(url: string)
    {
        this.url = url;  
        this.http.get(this.url)    .subscribe(result => {           
            this.content = result.json() as ContentID;
        }, error => console.error(error)); 

      //  this.http.get(this.url).map(content => this.content);
        
   
    }
}