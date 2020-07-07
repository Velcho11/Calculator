import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  result: number
  c: number = 0;
  d: number = 0;
  constructor() {
    }
    onAdd(){
      this.result = this.c * this.d;
      }

}
