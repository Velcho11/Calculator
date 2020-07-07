import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  result: number
  x: number = 0;
  z: number = 0;
  constructor() {
    }
    onAdd(){
      this.result = this.x / this.z;
      }

  ngOnInit() {
  }

}
