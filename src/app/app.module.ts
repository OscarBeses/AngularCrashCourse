import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { ZippyComponent } from './zippy/zippy.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthorService } from './author.service';
import { LikeComponent } from './like/like.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { TitleCasePipe } from './common/title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // Añadido manualmente
    AuthorsComponent,
    TitleCasePipe,
    FavoriteComponent,
    LikeComponent,
    ZippyComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    /* 
     * Sin estas dos clases no van los template-driven forms 
     * ni los model-driven forms 
     */
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
