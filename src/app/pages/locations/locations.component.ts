import {
	Component,
	ViewEncapsulation,
	ViewChild,
	OnInit,
	HostListener,
	ElementRef
} from "@angular/core";
import { GlobalState } from "../../app.state";
import { ConfigService } from "../../shared/services/config/config.service";
import { MdSidenav } from "@angular/material";
@Component({
	selector: ".content_inner_wrapper",
	templateUrl: "./locations.component.html",
	styleUrls: ["./locations.component.scss"]
})
export class LocationsComponent implements OnInit {
	@ViewChild("rightSidenav2") rightSidenav2: MdSidenav;
	navMode = "side";
	lat: number = 47.604981;
	lng: number = -122.334249;
	constructor(
		public config: ConfigService,
		private _elementRef: ElementRef,
		private _state: GlobalState
	) {}

	ngOnInit() {
		if (window.innerWidth < 992) {
			this.navMode = "over";
			this.rightSidenav2.opened = false;
		}
		if (window.innerWidth > 992) {
			this.navMode = "side";
			this.rightSidenav2.open();
		}
	}

	@HostListener("window:resize", ["$event"])
	onResize(event) {
		if (event.target.innerWidth < 992) {
			this.navMode = "over";
			this.rightSidenav2.close();
		}
		if (event.target.innerWidth > 992) {
			this.navMode = "side";
			this.rightSidenav2.open();
		}
	}
}
