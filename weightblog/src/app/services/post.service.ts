import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { environment } from '../../environments/environment';
import { User } from '../user';
import { Authresponse } from '../authresponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<Authresponse> {
    return this.makeAuthApiCall('login', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Observable<Authresponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http.post(url,user);
  }

  getAllPosts(): Observable<Post[]>{
    const url = `${this.apiBaseUrl}/posts`;
    return this.http.get<Post[]>(url);
  }

  getSinglePost(id: string): Observable<Post> {
    const url = `${this.apiBaseUrl}/posts/${id}`;
    return this.http.get<Post>(url);
  }

  addPost(formData: any): Observable<any> {
    const url: string = `${this.apiBaseUrl}/posts`;
    return this.http.post<Post>(url, formData, httpOptions);
  }

  editPost(formData: any, id: string): Observable<any> {
    const url: string = `${this.apiBaseUrl}/posts/${id}`;
    return this.http.put<Post>(url, formData, httpOptions);
  }

  deletePost(id: string): Observable<any> {
    const url: string = `${this.apiBaseUrl}/posts/${id}`;
    return this.http.delete(url);
  }
  
}
