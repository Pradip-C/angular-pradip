import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Pradip Chavan';
  value = '';

  onClick() {
    this.value = 'Umesh';
  }
  onClear() {
    this.value = '';
  }
}
