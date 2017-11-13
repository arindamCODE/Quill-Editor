import { ContentID } from './ContentID';
import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class ViewService {
 

    content: ContentID;
    constructor(private http: Http) { }

    show(content: ContentID) 
    {
        this.content = content; 
    }


}