import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Hello1Component } from './hello1/hello1.component'; //애플리케이션의 첫 화면에 Hello1Component를 넣는다.
import { Hello2Component } from './hello2/hello2.component';
import { Hello3Component } from './hello3/hello3.component';
import { Hello4Component } from './hello4/hello4.component';

@NgModule({
  declarations: [
    AppComponent,
    Hello1Component, //애플리케이션의 첫 화면에 Hello1Comp,
    Hello2Component,
    Hello3Component,
    Hello4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
