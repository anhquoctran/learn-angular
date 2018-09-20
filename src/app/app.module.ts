import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClickIncrementComponent } from './click-increment/click-increment.component';
import { ClickChildComponent } from './click-child/click-child.component';

const appRoutes: Routes = [
  //{ path: '', component: AppComponent},
  { path: 'list-person', component: ListPersonComponent },
  { path: 'dictionary', component: WordsComponent },
  { path: 'click-me', component: ClickIncrementComponent }
  //{ path: '**', redirectTo: '/error' },
  //{ path: 'error', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    PageNotFoundComponent,
    ClickIncrementComponent,
    ClickChildComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
