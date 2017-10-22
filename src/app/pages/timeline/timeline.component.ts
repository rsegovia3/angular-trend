import {
	Component,
	ViewChild,
	ViewEncapsulation,
	Input,
	OnInit
} from "@angular/core";
import { FormControl, NgModel } from "@angular/forms";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";
import { NgDateRangePickerOptions } from "ng-daterangepicker";
@Component({
	selector: ".content_inner_wrapper",
	templateUrl: "./timeline.component.html",
	styleUrls: ["./timeline.component.scss"]
})
export class TimelineComponent implements OnInit {
	//Header Title
	title: string = "Timeline";
	//Date Picker
	constructor() {
		
	}

	ngOnInit() {}
}
