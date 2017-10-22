import { Component } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Component({
	selector: ".content_inner_wrapper",
	templateUrl: "./basic-tables.component.html",
	styleUrls: ["./basic-tables.component.scss"]
})
export class BasicTablesComponent {
	rows: Observable<any[]>;

	columns = [{ name: "Name" }, { name: "Gender" }, { name: "Company" }];

	constructor() {
		this.rows = Observable.create(subscriber => {
			this.fetch(data => {
				subscriber.next(data.splice(0, 15));
				subscriber.next(data.splice(15, 30));
				subscriber.complete();
			});
		});

		// Rx.DOM.ajax({ url: '/products', responseType: 'json'}).subscribe()
		// this.rows = Observable.from(rows);
	}

	fetch(cb) {
		const req = new XMLHttpRequest();
		req.open("GET", `/assets/data/demos/company.json`);

		req.onload = () => {
			cb(JSON.parse(req.response));
		};

		req.send();
	}
}
