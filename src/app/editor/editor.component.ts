import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public editorContent = '';
  public tags = '';

  constructor(private post: PostService){}

  ngOnInit(){}

  save(content: string, tags: string)
  {
    this.editorContent = content;
    this.tags = tags;
    this.post.postContent(this.editorContent, this.tags);
  } 
}
