import {
	Component,
	OnInit,
	trigger,
	state,
	style,
	transition,
	animate,
	ElementRef,
	HostListener,
	HostBinding
} from "@angular/core";
import { GlobalState } from "../../app.state";
import { ConfigService } from "../../shared/services/config/config.service";

@Component({
	selector: ".content_inner_wrapper",
	templateUrl: "./gallery.component.html",
	styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
	images = [
		{
			imgId: 1,
			imgName: "full-1.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 2,
			imgName: "full-2.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 3,
			imgName: "full-3.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 4,
			imgName: "full-4.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 5,
			imgName: "full-5.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 6,
			imgName: "full-6.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 7,
			imgName: "full-7.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 8,
			imgName: "full-8.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 9,
			imgName: "full-9.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 10,
			imgName: "full-10.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 11,
			imgName: "full-11.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 12,
			imgName: "full-12.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 13,
			imgName: "full-13.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 14,
			imgName: "full-14.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 15,
			imgName: "full-15.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 16,
			imgName: "full-16.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 17,
			imgName: "full-17.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 18,
			imgName: "full-18.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 19,
			imgName: "full-19.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 20,
			imgName: "full-20.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 21,
			imgName: "full-21.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 22,
			imgName: "full-22.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 23,
			imgName: "full-23.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 24,
			imgName: "full-24.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 25,
			imgName: "full-25.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 26,
			imgName: "full-26.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 27,
			imgName: "full-27.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 29,
			imgName: "full-29.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 30,
			imgName: "full-30.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 31,
			imgName: "full-31.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		},
		{
			imgId: 32,
			imgName: "full-32.jpg",
			imgPath: "/assets/img/gallery/full/",
			imgCaption: "Image Caption"
		}
	];
	constructor(
		public config: ConfigService,
		private _elementRef: ElementRef,
		private _state: GlobalState
	) {}

	ngOnInit() {}
}
