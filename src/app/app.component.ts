import { Component } from '@angular/core';
import {PostService} from "./services/post.services";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'start-app';
  e: number = Math.E;
  str: string = 'hello world';
  date: Date = new Date;
  float: number = 0.42;
  search: any = '';
  obj: object = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }
  searchField: string = 'title'
  posts: Post[] = [];


  constructor(private postService: PostService) {}

  ngOnInit(){
   this.posts = this.postService.getPosts()
  }

}


