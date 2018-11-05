import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentA } from './component-a/component-a.component';
import { ComponentB } from './component-b/component-b.component';
import { ComponentC } from './component-c/component-c.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentA,
    ComponentB,
    ComponentC
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
