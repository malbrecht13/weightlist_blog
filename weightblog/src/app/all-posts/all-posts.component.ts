import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/Post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  postList: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe({
      next: posts => {
        this.postList = posts;
      },
      error: err => console.log(err)
    });
  }

  dateFromObjectId(objectId: string): string {
    const date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    const stringDate = `${month + 1}/${day}/${year}`;
    return stringDate;
  };



}
