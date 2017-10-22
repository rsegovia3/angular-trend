import { Http, Headers, Response, Jsonp, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/catch";
@Injectable()
export class DataService {
	constructor(private http: Http) {}

	getListCardDemo = (): Observable<Response> => {
		return this.http
			.get("/assets/data/ListCardData.json")
			.map(res => res.json());
	};
	getMailCardDemo = (): Observable<Response> => {
		return this.http
			.get("/assets/data/mail/MailCardData.json")
			.map(res => res.json());
	};
	getMailDemo = (): Observable<Response> => {
		return this.http
			.get("/assets/data/mail/MailData.json")
			.map(res => res.json());
	};
	addDemoNotes = (): Observable<Response> => {
		return this.http
			.get("/assets/data/notes/notes.json")
			.map(res => res.json());
	};
}
