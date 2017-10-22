import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <header-bar> </header-bar>
      <h1>Hello {{name}}</h1>
    </div>
  `,
})
export class AppComponent  { name = 'Angular'; }
