import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-admin-edit-all',
  templateUrl: './admin-edit-all.component.html',
  styleUrls: ['./admin-edit-all.component.scss']
})
export class AdminEditAllComponent implements OnInit {
  posts: any;

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe({
      next: posts => {
        this.posts = posts;
      },
      error: err => console.log(err)
    });
  }

  dateFromObjectId(objectId: string): string {
    const date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    return `${month}/${day}/${year}`;
  };

  onDeleteBtnClick(id: string): void {
    const confirmed = confirm('Are you sure you want to delete this post?');
    if(confirmed) {
      this.postService.deletePost(id).subscribe();
      window.location.reload();
    }
  }
}


