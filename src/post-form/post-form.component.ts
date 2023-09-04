import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Post} from "../models/post.model";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent{

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput') inputRef!: ElementRef



 title: string = ''
 text: string = ''

  ngOnInit(){

  }

  addPost(){
    if(this.text.trim() && this.title.trim()){
      const post: Post = {
        title: this.title,
        text: this.text,
        id: Math.floor(Math.random())
      }

      this.onAdd.emit(post)

      this.title = this.text = ''
    }
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }

}
