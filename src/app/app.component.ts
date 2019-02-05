import { Component } from '@angular/core';

import { add } from '@coryrylan/ts-example';
import { registerCounter } from '@coryrylan/wc-example';
registerCounter();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  number = 0;
  count = 10;

  add() {
    // silly but shows that we are using a function from a TypeScript library
    this.number = add(this.number, 1);
  }
}
