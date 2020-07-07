import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  result: number
  p: number = 0;
  q: number = 0;
  constructor() {
    }
    onAdd(){
      this.result = this.p + this.q;
      }

}
