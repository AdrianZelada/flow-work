import { Component, OnInit } from '@angular/core';
import { FlowAbstractComponent } from '../types/cp.abstract';

@Component({
  selector: 'component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css']
})
export class ComponentC extends FlowAbstractComponent implements OnInit {

  isActive :boolean =false;
  text :string= '';
  number:number=0;
  constructor() { 
    super();
  }

  ngOnInit() {
  }

  initial(data:any){
    this.isActive = true;
    this.text = data.text; 
    this.number = data.number;
  }

}
