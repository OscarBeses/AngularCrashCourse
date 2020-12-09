import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { ZippyComponent } from './zippy/zippy.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthorService } from './author.service';
import { LikeComponent } from './like/like.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { TitleCasePipe } from './common/title-case.pipe';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundError } from './common/not-found-error';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostService } from './services/post.service';
import { GithubFollowersService } from './services/github-followers.service';

@NgModule({
  declarations: [
    AppComponent,
    // Añadido manualmente
    AuthorsComponent,
    TitleCasePipe,
    FavoriteComponent,
    LikeComponent,
    ZippyComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    /* 
     * Sin estas dos clases no van los template-driven forms 
     * ni los model-driven forms 
     */
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthorService,
    { 
      provide: ErrorHandler, 
      useClass: NotFoundError
    },
    PostService,
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
