import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';
import { PrettyPrintPipe } from './prettyjson.pipe'
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClickIncrementComponent } from './click-increment/click-increment.component';
import { ClickChildComponent } from './click-child/click-child.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { BreadcumComponent } from './breadcum/breadcum.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'list-person', component: ListPersonComponent },
  { path: 'dictionary', component: WordsComponent },
  { path: 'click-me', component: ClickIncrementComponent },
  { path: 'directive', component: WordComponent }
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
    ClickChildComponent,
    MenuComponent,
    PrettyPrintPipe,
    HomeComponent,
    BreadcumComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
