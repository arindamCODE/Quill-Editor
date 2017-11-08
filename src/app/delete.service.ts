import { ContentID } from './ContentID';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class DeleteService
{
    constructor(private http: Http) {}

    private url: string = 'http://localhost:5000/api/content';
    private url1: string;
    content: ContentID;

    deleteContent(id: number)
    {
        this.url1 = `${this.url}/${id}`;
        this.http.delete(this.url1).subscribe(
            () => { console.log('Success') }
            );
    }

}