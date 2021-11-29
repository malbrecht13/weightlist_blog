import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../models/Post';

@Component({
  selector: 'app-admin-edit-single-post',
  templateUrl: './admin-edit-single-post.component.html',
  styleUrls: ['./admin-edit-single-post.component.scss']
})
export class AdminEditSinglePostComponent implements OnInit {

  title: string = '';
  body: string = '';
  dateCreated: string = '';
  id: number = 0;
  post: any;

  faSave = faSave;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = parseInt(param['id']);
    });
    this.postService.getAllPosts().subscribe({
      next: posts => {
        this.post= posts[this.id];
      }
    });
    this.title = this.post.title;
    this.body = this.post.body;
    this.dateCreated = this.post.dateCreated;
  }

}
