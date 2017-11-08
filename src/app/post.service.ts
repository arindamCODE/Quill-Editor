import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class PostService {
    constructor(private http: Http) {}

    private url: string = 'http://localhost:5000/api/content';
    content: Content;

    postContent(content: string, tags: string) {

        this.content = new Content(content, tags);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post(this.url, this.content, options).map(response => response.json())
            .subscribe(
            () => { console.log('Success') }
            );
    }
}