import { ContentID } from './ContentID';
import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class IsDeleteService {
    constructor(private http: Http) {

    }

    private url: string = 'http://localhost:5000/api/content';

    private url1: string;
    content: ContentID;
    public id: number;
    public id1: number;
    public con: string;
    public tags: string;
    public favourite: boolean;
    public user: string;
    public isDelete: boolean;

    setDelContent(id: number, con: string, tags: string, favourite: boolean, users: string, isDelete: boolean) {
        this.id = id;
        this.con = con;
        this.tags = tags;
        this.favourite = favourite;
        this.user = users;
        this.isDelete = true;
    }
    
    putDelContent() 
    { 
        this.url1 = `${this.url}/${this.id}`;
        this.content = new ContentID(this.id, this.con, this.tags, this.favourite, this.user, this.isDelete);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.put(this.url1, this.content, options).map(response => response.json())
            .subscribe(
            () => { console.log('Success') }
            );
    }
}