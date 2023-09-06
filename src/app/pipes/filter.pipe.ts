import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../../models/post.model";


@Pipe({
  name: 'filter',
  // pure: false - Урезает оптимизацию, но реагирует на динамическое добавление поста
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', field: string = 'title'): Post[] {
    if(!search.trim()){
      return posts
    }
    return posts.filter( post =>{
      return (post[field as keyof Post] as string).toLowerCase().includes(search.toLowerCase());
    })
  }

}
