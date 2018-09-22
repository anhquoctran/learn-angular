import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, BrowserXhr } from '@angular/http'

import { AppComponent } from './app.component';
import { PrettyPrintPipe } from './prettyjson.pipe';
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
import { BreadcumbComponent } from './breadcum/breadcumb.component';
import { HNavComponent } from './h-nav/h-nav.component';
import { RequestComponent } from './request/request.component';
import { CustExtBrowserXhr } from './cust-ext-browser-xhr';


export const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent,
		data: {
			breadcrumb: ''
		}
	},
	{ 
		path: 'directive', 
		component: WordComponent,
		data: {
			breadcrumb: 'Example 1'
		}
	},
	{ 
		path: 'click-me', 
		component: ClickIncrementComponent,
		data: {
			breadcrumb: 'Example 2'
		}
	},
	{ 
		path: 'dictionary', 
		component: WordsComponent,
		data: {
			breadcrumb: 'Example 3'
		}
	},
	{ 
		path: 'list-person', 
		component: ListPersonComponent,
		data: {
			breadcrumb: 'Example 4'
		}
	},
	{
		path: 'request',
		component: RequestComponent,
		data: {
			breadcrumb: 'Example 10'
		}
	}
];

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
    BreadcumbComponent,
    HNavComponent,
    RequestComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
	BrowserAnimationsModule,
	HttpClientModule,
	HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
  ],
  providers: [
	  { provide: BrowserXhr, useClass: CustExtBrowserXhr }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
