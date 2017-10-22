"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var InputAnimatedComponent = (function () {
    function InputAnimatedComponent() {
        this.isActive = false;
        console.log('placeHolder: ' + this.placeHolder);
    }
    InputAnimatedComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
        console.log('on: ' + this.isActive);
        console.log('placeHolder: ' + this.placeHolder);
    };
    InputAnimatedComponent.prototype.animationStarted = function (event) {
        console.log('Animation started: ', event);
    };
    InputAnimatedComponent.prototype.animationDone = function (event) {
        console.log('Animation done: ', event);
    };
    return InputAnimatedComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputAnimatedComponent.prototype, "placeHolder", void 0);
InputAnimatedComponent = __decorate([
    core_1.Component({
        selector: 'input-animated',
        template: '<input class="form-control mr-sm-2" type="text" placeholder="{{placeHolder}}" [@focusTrigger]="isActive" (@focusTrigger.start)="animationStarted($event)" (@focusTrigger.done)="animationDone($event)" (focus) = "this.eventCalled()" (blur) = "this.eventCalled()">',
        animations: [
            animations_1.trigger('focusTrigger', [
                animations_1.state("0", animations_1.style({
                    '-ms-transform': 'scale(1 , 1)',
                    '-webkit-transform': 'scale(1 , 1)',
                    '-moz-transform': 'scale(1 , 1)',
                    '-o-transform': 'scale(1 , 1)',
                    'transform': 'scale(1 , 1)',
                    '-ms-transform-origin': 'left top',
                    '-webkit-transform-origin': 'left top',
                    '-moz-transform-origin': 'left top',
                    '-o-transform-origin': 'left top',
                    'transform-origin': 'left top'
                })),
                animations_1.state("1", animations_1.style({
                    '-ms-transform': 'scale(1.3 , 1)',
                    '-webkit-transform': 'scale(1.3 , 1)',
                    '-moz-transform': 'scale(1.3 , 1)',
                    '-o-transform': 'scale(1.3 , 1)',
                    'transform': 'scale(1.3 , 1)',
                    '-ms-transform-origin': 'left top',
                    '-webkit-transform-origin': 'left top',
                    '-moz-transform-origin': 'left top',
                    '-o-transform-origin': 'left top',
                    'transform-origin': 'left top'
                })),
                animations_1.transition('* <=> *', animations_1.animate('400ms ease-in'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], InputAnimatedComponent);
exports.InputAnimatedComponent = InputAnimatedComponent;
//# sourceMappingURL=input-animated.component.js.map