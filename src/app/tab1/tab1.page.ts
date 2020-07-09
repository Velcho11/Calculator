import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  result: number
  p: number = 0;
  q: number = 0;
  key:string=" "
  constructor(private storage: Storage) {
    }
    onAdd(){
      this.result = this.p + this.q;
      this.storage.set(this.key,this.p);
      this.storage.set(this.key,this.q);
      this.storage.set(this.key,this.result);
      }
      Allget(){
        this.storage.get(this.key).then((val)=>{
        console.log('First Number: ',this.p);
        console.log('Second Number:',this.q);
        console.log('Result:',this.result )
        })
              }
}
