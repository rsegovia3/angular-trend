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
	HostBinding,
	Input,
	Output,
	EventEmitter
} from "@angular/core";
import { GlobalState } from "../../../app.state";
import { ConfigService } from "../../../shared/services/config/config.service";
import {
	ReactiveFormsModule,
	FormsModule,
	FormGroup,
	FormControl,
	Validators,
	FormBuilder
} from "@angular/forms";

@Component({
	selector: ".content_inner_wrapper",
	templateUrl: "./form-wizard.component.html",
	styleUrls: ["./form-wizard.component.scss"]
})
export class FormWizardComponent implements OnInit {
	@Input() title: string;

	@Input() hidden: boolean = false;
	@Input() isValid: boolean = true;
	@Input() showNext: boolean = true;
	@Input() showPrev: boolean = true;

	@Output() onNext: EventEmitter<any> = new EventEmitter<any>();
	@Output() onPrev: EventEmitter<any> = new EventEmitter<any>();

	language: string[] = ["English", "French", "German"];
	myform: FormGroup;

	private _isActive: boolean = false;
	isDisabled: boolean = true;

	@Input("isActive")
	set isActive(isActive: boolean) {
		this._isActive = isActive;
		this.isDisabled = false;
	}

	get isActive(): boolean {
		return this._isActive;
	}
	isCompleted: boolean = false;

	onStep1Next(event) {
		console.log("Step1 - Next");
	}

	onStep2Next(event) {
		console.log("Step2 - Next");
	}

	onStep3Next(event) {
		console.log("Step3 - Next");
	}

	onComplete(event) {
		this.isCompleted = true;
	}

	onStepChanged(step) {
		console.log("Changed to " + step.title);
	}
	ngOnInit() {
		this.myform = new FormGroup({
			name: new FormGroup({
				firstName: new FormControl("", Validators.required),
				lastName: new FormControl("", Validators.required)
			}),
			email: new FormControl("", [
				Validators.required,
				Validators.pattern("[^ @]*@[^ @]*")
			]),
			language: new FormControl(),
			address: new FormGroup({
				addressOne: new FormControl("", Validators.required),
				addressTwo: new FormControl("", Validators.required)
			}),
			city: new FormControl()
		});
	}
}
