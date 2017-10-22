import { Component, OnInit, trigger, state, style, transition, animate, ElementRef, HostListener, HostBinding} from '@angular/core';
import {GlobalState} from '../../../app.state';
import { ConfigService } from '../../../shared/services/config/config.service';

@Component({
  selector: '.content_inner_wrapper',
  templateUrl: './drawers.component.html',
  styleUrls: ['./drawers.component.scss']
})
export class DrawersComponent implements OnInit {

  constructor(public config: ConfigService, private _elementRef: ElementRef, private _state: GlobalState) {

  }

  ngOnInit() {

  }


}
