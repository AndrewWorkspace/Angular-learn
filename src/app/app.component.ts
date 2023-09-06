import {Component} from '@angular/core';
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

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() =>{
      resolve('resolved')
    },4000)
  })


  constructor(private postService: PostService) {}



  ngOnInit(){
   this.posts = this.postService.getPosts()
  }



  addPost(){
   function randomNum(min:number,max:number){
     return Math.floor(Math.random() * (max - min) + min)
    }


    this.posts.push({
      id: randomNum(1,5000),
      title: 'Angular',
      text: 'New Post Ttext'
    })
  }

}


