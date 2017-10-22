"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var header_bar_component_1 = require("./header-bar.component");
var input_animated_component_1 = require("./input-animated/input-animated.component");
var animations_1 = require("@angular/platform-browser/animations");
var HeaderBarModule = (function () {
    function HeaderBarModule() {
    }
    return HeaderBarModule;
}());
HeaderBarModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            ng_bootstrap_1.NgbModule,
            animations_1.BrowserAnimationsModule
        ],
        declarations: [header_bar_component_1.HeaderBarComponent,
            input_animated_component_1.InputAnimatedComponent
        ],
        exports: [header_bar_component_1.HeaderBarComponent]
    })
], HeaderBarModule);
exports.HeaderBarModule = HeaderBarModule;
//# sourceMappingURL=header-bar.module.js.map