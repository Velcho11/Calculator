import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  result: number
  c: number = 0;
  d: number = 0;
  key:string = "";
  constructor(private storage: Storage) {
    }
    onAdd(){
      this.result = this.c * this.d;
      this.storage.set(this.key,this.c);
      this.storage.set(this.key,this.d);
      this.storage.set(this.key,this.result);
      }
      Allget(){
        this.storage.get(this.key).then((val)=>{
        console.log('First Number: ',this.c);
        console.log('Second Number:',this.d);
        console.log('Result:',this.result )
        })
              }
}