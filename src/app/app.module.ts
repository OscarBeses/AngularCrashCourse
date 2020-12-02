import { FavoriteComponent } from './favorite/favorite.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './author.service';
import { TitleCasePipe } from './common/title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // Añadido manualmente
    AuthorsComponent,
    FavoriteComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
