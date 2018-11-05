import { Injectable } from '@angular/core';
import { FlowAbstractComponent } from '../types/cp.abstract';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

interface stepFlow{
  component : FlowAbstractComponent,
  arguments?: any,
  data?     : any
}

@Injectable({
  providedIn: 'root'
})
export class FlowService {

  flowComponents:Array<stepFlow>=[];
  index:number=0;

  constructor() { }

  pushFlow(component:FlowAbstractComponent){
    this.flowComponents.push({
      component:component
    })
  }

  selectFlow(index :number , data?:any){        
    this.index= index;    
    this.flowComponents[this.index].arguments=data;
    this.flowComponents[this.index].component.initial(data);    
    let resolve : Observable<any> = this.flowComponents[this.index].component.resolve.asObservable();
    resolve.pipe(
      take(1)
    ).subscribe((data:any)=>{      
      this.selectFlow(this.index+1,data);
    });    
  }
}
