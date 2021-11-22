import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-individual-post',
  templateUrl: './individual-post.component.html',
  styleUrls: ['./individual-post.component.scss']
})
export class IndividualPostComponent implements OnInit {

  title: string = '';
  body: string = '';
  dateCreated: string = '';
  id: number = 0;
  post: any = {};

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = parseInt(param['id']);
    });
    this.post = this.postService.getAllPosts()[this.id];
    this.title = this.post.title;
    this.body = this.post.body;
    this.dateCreated = this.post.dateCreated;
  }

}
