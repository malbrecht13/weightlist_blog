import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndividualPostComponent } from './individual-post/individual-post.component';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminEditAllComponent } from './admin-edit-all/admin-edit-all.component';
import { AdminEditSinglePostComponent } from './admin-edit-single-post/admin-edit-single-post.component';
import { AdminAddPostComponent } from './admin-add-post/admin-add-post.component';

import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPostsComponent,
    PageNotFoundComponent,
    IndividualPostComponent,
    AboutComponent,
    AdminLoginComponent,
    AdminEditAllComponent,
    AdminEditSinglePostComponent,
    AdminAddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
