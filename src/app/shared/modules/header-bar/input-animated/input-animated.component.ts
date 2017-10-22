import {Component,Input} from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
    selector: 'input-animated',
    template: '<input class="form-control mr-sm-2" type="text" placeholder="{{placeHolder}}" [@focusTrigger]="isActive" (@focusTrigger.start)="animationStarted($event)" (@focusTrigger.done)="animationDone($event)" (focus) = "this.eventCalled()" (blur) = "this.eventCalled()">',
    animations: [
        trigger('focusTrigger', [
        state("0", style({
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
        state("1",   style({
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
        transition('* <=> *', animate('400ms ease-in'))
        ])
  ]
})
export class InputAnimatedComponent {
    @Input() placeHolder : string;
    isActive = false;

    constructor() {
         console.log('placeHolder: ' + this.placeHolder);
    }

    eventCalled() {
        this.isActive = !this.isActive;
        console.log('on: ' + this.isActive);
        console.log('placeHolder: ' + this.placeHolder);
    }

    animationStarted(event: AnimationEvent) {
        console.log('Animation started: ', event);
    }

    animationDone(event: AnimationEvent) {
    console.log('Animation done: ', event);
  }
}