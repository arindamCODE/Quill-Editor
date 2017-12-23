import { ContentID } from './ContentID';
import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class PutFavService {
    constructor(private http: Http) {

    }

    private url: string = 'http://localhost:5000/api/content';

    private url1: string;
    content: ContentID;
    public id: number;
    public con: string;
    public tags: string;
    public favourite: boolean;
    public user: string;
    public isDelete: boolean;

    setFavContent(id: number, con: string, tags: string, favourite: boolean, users: string, isDelete: boolean)
    {
        this.id = id;
        this.con = con;
        this.tags = tags;
        this.favourite = favourite;
        this.user = users;
        this.isDelete = isDelete;
    }


    putFavContent(fav: boolean) 
    {

        this.url1 = `${this.url}/${this.id}`;
        this.content = new ContentID(this.id, this.con, this.tags, fav, this.user, this.isDelete);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.put(this.url1, this.content, options).map(response => response.json())
            .subscribe(
            () => { console.log('Success') }
            );
    }
}