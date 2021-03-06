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
  id: string = '';
  post: any = {};
  postList: any;

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
      error: err => console.log(err)
    });
    
  }

  dateFromObjectId(objectId: string): string {
    const date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    return `${month + 1}/${day}/${year}`;
  };

}
