import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../models/post.model";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None //Делает Стили Глобальными
})
export class PostComponent {

  @Input() post: Post = {} as Post;
  @Output() onRemove = new EventEmitter<number>;
  @ContentChild('info', {static: true}) infoRef!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnChanges')
  }

  ngOnInit(){

  }

  removePost(){
    this.onRemove.emit(this.post.id)
  }


}
