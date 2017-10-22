import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery.component";
import { SharedModule } from "../../shared/shared.module";
import { NgBoxService } from "ngbox/ngbox.service";
//ngbox - image lightbox
import { NgBoxModule } from "ngbox/ngbox.module";
const GALLERY_ROUTE = [{ path: "", component: GalleryComponent }];

@NgModule({
	declarations: [GalleryComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(GALLERY_ROUTE),
		NgBoxModule
	],
	providers: [NgBoxService]
})
export class GalleryModule {}
