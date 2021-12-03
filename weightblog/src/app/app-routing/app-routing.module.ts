import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from '../all-posts/all-posts.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { IndividualPostComponent } from '../individual-post/individual-post.component';
import { AboutComponent } from '../about/about.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { AdminEditAllComponent } from '../admin-edit-all/admin-edit-all.component';
import { AdminEditSinglePostComponent } from '../admin-edit-single-post/admin-edit-single-post.component';
import { AdminAddPostComponent } from '../admin-add-post/admin-add-post.component';

const routes: Routes = [
  {path: 'posts', component: AllPostsComponent},
  {path: 'posts/:id', component: IndividualPostComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin/login', component: AdminLoginComponent},
  {path: 'admin/edit', component: AdminEditAllComponent},
  {path: 'admin/edit/:id', component: AdminEditSinglePostComponent},
  {path: 'admin/add', component: AdminAddPostComponent },
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
