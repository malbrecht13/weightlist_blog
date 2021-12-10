import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../user';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  public credentials = {
    email: '',
    password: ''
  } as User;

  formError: string = '';

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
   
  }

  onLoginSubmit(): void {
    this.formError = '';
    if(!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void{
    this.authService.login(this.credentials);
    setTimeout(() => {
      if(this.authService.isLoggedIn()) {
        this.router.navigateByUrl('/admin/edit');
      } else {
        this.formError = 'Incorrect credentials entered.';
      }

    }, 500);
  }

}
