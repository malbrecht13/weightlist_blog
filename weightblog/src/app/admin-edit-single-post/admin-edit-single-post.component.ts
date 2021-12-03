import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-edit-single-post',
  templateUrl: './admin-edit-single-post.component.html',
  styleUrls: ['./admin-edit-single-post.component.scss']
})
export class AdminEditSinglePostComponent implements OnInit {

  id: string = '';
  post: any;
  formError: string = '';

  public editedPost = {
    title: '',
    body: '',
    dateCreated: ''
  };

  faSave = faSave;

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id'];
    });
    this.postService.getSinglePost(this.id).subscribe({
      next: post => {
        this.post = post;
        this.editedPost.title = this.post.title;
        this.editedPost.body = this.post.body;
        this.editedPost.dateCreated = this.dateFromObjectId(this.post._id);
      },
      error: error => console.log(error)
    });
  }

  dateFromObjectId(objectId: string): string {
    const date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    return `${month}/${day}/${year}`;
  };

  private formIsValid(): boolean {
    if(this.editedPost.title && this.editedPost.body) {
      return true;
    } else {
      return false;
    }
  }

  onEditPostSubmit(id: string): void {
    this.formError = '';
    if(this.formIsValid()) {
      this.postService.editPost(this.editedPost, this.id).subscribe();
      this.editedPost.title = '';
      this.editedPost.body = '';
      this.editedPost.dateCreated = '';
      this.router.navigate(['admin/edit']);
    } else {
      this.formError = 'All fields required, please try again.';
    }
    this.removeMsg();
  }

  removeMsg(): void {
    setTimeout(() => {
      this.formError = '';
    }, 10000); // remove error message after 10 seconds
  }
}
