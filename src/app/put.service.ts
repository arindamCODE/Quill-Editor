import { ContentID } from './ContentID';
import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class PutService {
    constructor(private http: Http) {

    }

    private url: string = 'http://localhost:5000/api/content';

    private url1: string;
    content: ContentID;
    public fav: boolean = false;
    public user: string = null;
    public isDelete: boolean = false;

    putContent(id: number, con: string, tags: string) {

        this.url1 = `${this.url}/${id}`;
        this.content = new ContentID(id, con, tags, this.fav, this.user, this.isDelete);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.put(this.url1, this.content, options).map(response => response.json())
            .subscribe(
            () => { console.log('Success') }
            );
    }
}