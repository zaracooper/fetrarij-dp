import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input type="text" ngxDaterangepickerMd [(ngModel)]="selected" class="form-control"/>
  `,
  styles: []
})
export class AppComponent {
  title = 'fetrarij-dp';
  selected = '';
}
