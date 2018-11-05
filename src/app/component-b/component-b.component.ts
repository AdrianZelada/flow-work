import { Component, OnInit } from '@angular/core';
import { FlowAbstractComponent } from '../types/cp.abstract';

@Component({
  selector: 'component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentB extends FlowAbstractComponent implements OnInit {

  isActive : boolean =false;

  text : string ="";
  count:number = 0
  
  constructor() { 
    super();
  }

  ngOnInit() {
  }

  initial(data:any){
    this.isActive = true;
    this.text = data;
    this.count = 0;
    let time = setInterval(()=>{
      if(this.count==3){
        this.isActive=false;
        // this.resolve.next(`${this.text} Flow ${this.random()}`);
        this.resolve.next({
          text:this.text,
          number : this.random()
        })
        clearInterval(time) 
      }else{
        this.count++;
      }
    },1000)
  }

  random(){
    return Math.floor((Math.random() * 10) + 1);
  }

}
