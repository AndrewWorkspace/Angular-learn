// post.service.ts
import { Injectable } from '@angular/core';
import {Post} from "../models/post.model";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    { title: 'Component Title 1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, architecto.', id: 1 },
    { title: 'Component Title 2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, sequi?', id: 2 },
    { title: 'Component Title 3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, totam.', id: 3 }
  ];

  getPosts(): Post[] {
    return this.posts;
  }
}
