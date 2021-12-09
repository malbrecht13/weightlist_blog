import { Injectable, Inject } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../user';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage, private postService: PostService) { 
  }

  public login(user: User): void {
    this.postService.login(user).subscribe({
      next: authResp => {
        if(authResp.token) {
          this.saveToken(authResp.token);
        }
      },
      error: err => console.log(err)
    });
  }

  public logout(): void {
    this.storage.removeItem('weightblog-token');
  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if(token && token !== 'null') {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  // public getCurrentUser(): User {
  //   if(this.isLoggedIn()) {
  //     const token: string = this.getToken();
  //     const { email } = JSON.parse(atob(token.split('.')[1]));
  //     return { email } as User;
  //   }
  // }

  public saveToken(token: string): void {
    this.storage.setItem('weightblog-token', token);
  }

  public getToken(): string {
    return JSON.stringify(this.storage.getItem('weightblog-token'));
  }
}
