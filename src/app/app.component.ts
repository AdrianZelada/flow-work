import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ComponentA } from './component-a/component-a.component';
import { ComponentB } from './component-b/component-b.component';
import { ComponentC } from './component-c/component-c.component';
import { FlowService } from './service/flow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'flowWork';

  @ViewChild(ComponentA) cpA :ComponentA;
  @ViewChild(ComponentB) cpB :ComponentB;
  @ViewChild(ComponentC) cpC :ComponentC;

  constructor(private flowService:FlowService){}

  ngAfterViewInit(){

    this.flowService.pushFlow(this.cpA);
    this.flowService.pushFlow(this.cpB);
    this.flowService.pushFlow(this.cpC);

    setTimeout(()=>{
      this.flowService.selectFlow(0);
    },100)
    
  }
}
