import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
@Component({
	selector: 'app-request',
	templateUrl: './request.component.html',
	styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  	constructor(private http: HttpClient) {}

	contentType: string = 'text/html';
	body: string = '';
	url: string = 'http://google.com.vn';
	method: string = 'GET';

	requestHeaders = [];
	responeHeaders = [];

	response: string = '';
	isDisabledBody: boolean = false;
	rowCount: number = 1;

  	ngOnInit() {}

  	makeRequest():void {
		if(this.method === '' || this.method === undefined || !this.method) {
			this.method == 'GET'
		}
		if(this.url === '' || this.url === undefined || !this.url) {
			this.response == 'URL can not be empty! Please provide an URL to make a HTTP request!'
			return;
		}
		else this.response = '';

		if(this.validateUrl(this.url) || this.validateUrlWithoutScheme(this.url)) {
			if(this.validateUrlWithoutScheme(this.url)) {
				
				this.url = 'http://' + this.url;
			}

			this.response = '';
		} else {
			this.response = "ERROR: Invalid URL. Please check your URL is valid URL schema and can't be empty";
			return;
		}

		switch(this.method) {
			case 'GET':
				this.http.get(this.url)
				.subscribe(data => {
					this.printResponse(data);
					console.log(data)
				});
				
				break;
			case 'POST':

				break;
			case 'PUT':

				break;
			case 'DELETE':

				break;
		}
	}

  	changeMethod() {
		this.response = 'Executing...'
		this.delay(2000);
		switch (this.method) {
			case 'GET':
				this.isDisabledBody = false;
				break;
			case 'POST':
			case 'PUT':
			case 'DELETE':
				this.body = '';
				this.isDisabledBody = true;
				break;
		}
	  }
	  
	printResponse(responseData: Object) {
		if(responseData) {
			this.response = JSON.stringify(responseData, null, 4);
		}
		
	}

	validateUrl(url: string): boolean {
		if(url === '' || url === undefined || !url) {
			return false;
		} else {
			var regex = new RegExp(/^(?:(?:https?|http):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/);
			return regex.test(url);
		}
	}

	validateUrlWithoutScheme(url: string): boolean {
		if(url === '' || url === undefined || !url) return false;
		else {
			var regex = new RegExp(/^(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/)
			return regex.test(url);
		}
	}

	addRow(): void {
		this.rowCount++;
	}
  
	removeRow(): void {
		if(this.rowCount === 1) return;
		this.rowCount--;
	}

	delay(ms: number) {
		return new Promise( resolve => setTimeout(resolve, ms) );
	}

	getParameters() {
		if(this.url === '' || this.url === undefined || !this.url) {
			return [];
		}

		// if(this.validateUrl(this.url) || this.validateUrlWithoutScheme(this.url)) {
		// 	if(this.validateUrlWithoutScheme(this.url)) {
		// 		this.url = 'http://' + this.url;
		// 	}
		// } else {
		// 	return [];
		// }

		var urlParams = new URLSearchParams(this.url);
		urlParams.forEach((v, k, p) => {
			console.log(`${v} => ${k}`);
		})
	}
}
