import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NotesComponent } from "./notes.component";
import { SharedModule } from "../../shared/shared.module";
import { MasonryModule } from "angular2-masonry";

const NOTES_ROUTE = [{ path: "", component: NotesComponent }];

@NgModule({
	declarations: [NotesComponent],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(NOTES_ROUTE),
		MasonryModule
	]
})
export class NotesModule {}
