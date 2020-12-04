import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: Object[];

  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response as Array<Object>;
      })
  }
}
