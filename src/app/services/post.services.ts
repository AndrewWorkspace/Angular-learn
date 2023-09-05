import {Injectable} from '@angular/core';
import {Post} from "../../models/post.model";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    {id: 1 , title: 'Title', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, nesciunt!'},
    {id: 2 , title: 'Name', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, id.'},
    {id: 3 , title: 'Text', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, officiis.'},
  ];

  getPosts(): Post[] {
    return this.posts;
  }

}
