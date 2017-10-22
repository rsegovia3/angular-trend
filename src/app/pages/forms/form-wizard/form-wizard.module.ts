import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormWizardComponent } from "./form-wizard.component";
import { SharedModule } from "../../../shared/shared.module";
import { FormWizardModule } from 'angular2-wizard';
const FORM_WIZARD_ROUTE = [{ path: "", component: FormWizardComponent }];

@NgModule({
	declarations: [FormWizardComponent],
	imports: [
		CommonModule,
		SharedModule,
		FormWizardModule,
		RouterModule.forChild(FORM_WIZARD_ROUTE)
	]
})
export class WizardModule {}
