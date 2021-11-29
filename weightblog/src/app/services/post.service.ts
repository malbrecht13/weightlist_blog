import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]>{
    const url = `${this.apiBaseUrl}/posts`;
    return this.http.get<Post[]>(url);
  }

  
}
