import { Component, OnInit, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  areHamburgerLinksVisible: boolean = false;

  publicBlogLinks = [
    {href: '', linkName: 'Blog Posts'}, 
    {href: 'about', linkName: 'About Weightlist'},
    {href: 'admin/login', linkName: 'Admin Login'}
  ];

  faBars = faBars;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        this.areHamburgerLinksVisible = false;
      }
    })
  }

  clickedHamburger():void {
    this.areHamburgerLinksVisible = !this.areHamburgerLinksVisible;
  }

}
