import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HeaderBarComponent } from './header-bar.component';
import { InputAnimatedComponent } from './input-animated/input-animated.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        BrowserAnimationsModule
    ],
    declarations: [ HeaderBarComponent,
                    InputAnimatedComponent
                  ],
    exports: [HeaderBarComponent]
})
export class HeaderBarModule { }