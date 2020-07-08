import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  private digits:{title:number}[]=[];
  result: number
  a: number = 0;
  b: number = 0;
  key:string=" "
  

  constructor(private storage: Storage) {
    }

    onAdd(){
      this.result = this.a - this.b;
      this.storage.set(this.key,this.a);
      this.storage.set(this.key,this.b);
      this.storage.set(this.key,this.result);
      }
      Allget(){
this.storage.get(this.key).then((val)=>{
console.log('First Number: ',this.a);
console.log('Second Number:',this.b);
console.log('Result:',this.result );
})
      }
     }
    