import { Component, OnInit } from '@angular/core';
import { FlowAbstractComponent } from '../types/cp.abstract';

@Component({
  selector: 'component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentA extends FlowAbstractComponent implements OnInit {

  isActive : boolean =false;
  
  constructor() { 
    super();
  }

  ngOnInit() {
  }

  initial(){
    this.isActive=true;
  }

  next(val:string){
    console.log(val)
    this.isActive=false;

    this.resolve.next(val);
  }

}
