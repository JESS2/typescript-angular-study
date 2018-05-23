import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServerService } from './server.service';
import { AppComponent } from './app.component';
import { StudentList1Component } from './student-list1/student-list1.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentList1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
