import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.scss']
})
export class AdminAddPostComponent implements OnInit {

  public newPost = {
    title: '',
    body: ''
  };

  public formError?: string;
  public postAddedMsg: string = '';

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  private formIsValid(): boolean {
    if(this.newPost.title && this.newPost.body) {
      return true;
    } else {
      return false;
    }
  }

  onAddPostSubmit(): void {
    this.formError = '';
    if(this.formIsValid()) {
      this.postAddedMsg = 'Post with title "' + this.newPost.title + '" was added.';
      this.postService.addPost(this.newPost).subscribe();
      this.newPost.title = '';
      this.newPost.body = '';
    } else {
      this.formError = 'All fields required, please try again.';
    }
    this.removeMsg();
  }

  removeMsg(): void {
    setTimeout(() => {
      this.formError = '';
      this.postAddedMsg = '';
    }, 10000); // remove message after 10 seconds
  }

}
