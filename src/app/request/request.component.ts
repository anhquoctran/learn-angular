import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Todo } from '../models/todo';
import { Post, Comment } from '../models/posts';
import { Album, Photo } from '../models/album';

@Component({
	selector: 'app-request',
	templateUrl: './request.component.html',
	styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  	constructor(private http: HttpClient) {}
	Users: User[] = [];
	Todos: Todo[] = [];
	Posts: Post[] = [];
	Comments: Comment[] = [];
	Albums: Album[] = [];
	Photos: Photo[] = [];

	cols = [
		'Id', "Name", "Username", "Email", "Phone", "Website", "Address", "Company", 'Resources'
	]

  	ngOnInit() {
		this.getUsers();
	}

	getUsers() {
		this.Users = [];
		var result = this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
		.pipe(
			map(data => {
				return data;
			})
		);

		result.forEach(v => {
			v.forEach(u => {
				this.Users.push(u);
				this.Users = [...this.Users];
			})
		});

		//console.log(this.Users);
	}

	getTodos(userId: number) {
		this.Todos = [];
		var result = this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?userId=' + userId)
		.pipe(
			map(data => {
				return data;
			})
		);

		result.forEach(v => {
			v.forEach(t => {
				this.Todos.push(t);
				this.Todos = [...this.Todos];
			})
		});
	}

	getPosts(userId:number) {
		this.Posts = [];
		var result = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
		.pipe(
			map(data => {
				return data;
			})
		)

		result.forEach(v => {
			v.forEach(p => {
				this.Posts.push(p);
				this.Posts = [...this.Posts];
			})
		})
	}

	getAlbums(userId:number) {
		this.Albums = [];
		var result = this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
		.pipe(
			map(data => {
				return data;
			})
		);

		result.forEach(v => {
			v.forEach(a => {
				this.Albums.push(a);
				this.Albums = [...this.Albums];
			})
		})
	}

	getTwoFirstCharacters(text: string):string {
		if(text === undefined || text === null || text === '') return 'UN';
		if(text.length < 2) {
			return text[0];
		} else {
			return (text[0] + text[1]).toUpperCase();
		}
	}
}
