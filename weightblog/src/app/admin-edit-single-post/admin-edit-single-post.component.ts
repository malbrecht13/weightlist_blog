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
  id: string = '';
  post: any;

  faSave = faSave;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id'];
    });
    this.postService.getSinglePost(this.id).subscribe({
      next: post => {
        this.post = post;
        this.title = this.post.title;
        this.body = this.post.body;
        this.dateCreated = this.dateFromObjectId(this.post._id);
      },
      error: error => console.log(error)
    });
  }

  dateFromObjectId(objectId: string): string {
    const date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    return `${month}/${day}/${year}`;
  };

}
