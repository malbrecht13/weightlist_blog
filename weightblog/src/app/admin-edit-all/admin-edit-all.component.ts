import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-admin-edit-all',
  templateUrl: './admin-edit-all.component.html',
  styleUrls: ['./admin-edit-all.component.scss']
})
export class AdminEditAllComponent implements OnInit {
  posts: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
  }

}
