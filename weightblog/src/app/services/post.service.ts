import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts = [
    {   
        "id": 0,
        "title": "Post 0",
        "dateCreated": "10/22/2021",
        "body": "<p>This is my first post.  The next one will be longer.</p>"
    },
    {
        "id": 1,
        "title": "Post 1",
        "dateCreated": "10/23/2021",
        "body": "<p>This is my second post.</p><p>This one has two paragraphs.</p>"
    },
    {   
        "id": 2,
        "title": "Post 2",
        "dateCreated": "10/24/2021",
        "body": "<p>This is my third post.</p><p>This one has three paragraphs.</p><p>This is the third paragraph.</p><p>This is an image:</p><img src='../assets/img/weightlist_icon.png' alt='Weightlist icon'/>"
    },
    {
        "id": 3,
        "title": "Post 3",
        "dateCreated": "10/25/2021",
        "body": "<p>This is the <b>fourth</b> post"
    }
];

  constructor() { }

  getAllPosts() {
    return this.posts;
  }
}
