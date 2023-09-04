import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PostService} from "./services/post.services";
import {Post} from "./models/post.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit{
  title = 'app';
  posts: Post[] = [];


  constructor(private postService: PostService) {}

  ngOnInit():void {
    this.posts = this.postService.getPosts();

    setTimeout(() =>{
      console.log(this.posts[0])
      this.posts[0] = {
        title: 'Post Title Changed',
        text: 'change 2',
        id: 124
      }
    },3000)

  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
    console.log(this.posts)
  }

  removePost(id:number){
    this.posts = this.posts.filter(p => p.id !== id)
  }

}
