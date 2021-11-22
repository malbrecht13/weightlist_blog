import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  postList: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postList = this.postService.getAllPosts();
  }

}
