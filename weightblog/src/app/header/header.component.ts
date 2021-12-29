import { Component, OnInit, HostListener } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faCommentMedical } from '@fortawesome/free-solid-svg-icons/faCommentMedical';
import { Router, Event, NavigationEnd } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  areHamburgerLinksVisible: boolean = false;
  adminIsLoggedIn: boolean = false;

  publicBlogLinks = [
    {href: '', linkName: 'Blog Posts'}, 
    {href: 'about', linkName: 'About Weightlist'},
    {href: 'admin/login', linkName: 'Admin Login'}
  ];

  adminLinks = [
    {href: '/admin/add', linkName: 'Add Post'}, 
    {href: '/admin/edit', linkName: 'Edit Posts'}, 
    {href: '/admin/login', linkName: 'Sign Out'}
  ];

  navLinks?: any[];

  faBars = faBars;
  faCommentMedical = faCommentMedical;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        this.areHamburgerLinksVisible = false;
        if(this.router.url.search(/admin/) !== -1) {
          if(this.isLoggedIn()) {
            this.navLinks = this.adminLinks;
            this.adminLinks[2].linkName = this.router.url === '/admin/login' ? 'Admin Login' : 'Sign Out';
          } else {
            this.navLinks = [];
          }
        } else {
          this.navLinks = this.publicBlogLinks;
        }
      }
    })
    
  }

  clickedHamburger():void {
    this.areHamburgerLinksVisible = !this.areHamburgerLinksVisible;
  }

  public doLogout(): void {
    this.authService.logout();
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  onClickSignOut(linkName: string): void {
    if(linkName === 'Sign Out') {
      this.doLogout();
    }
  }

}
