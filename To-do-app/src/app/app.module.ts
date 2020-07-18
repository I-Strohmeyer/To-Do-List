import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodocontainerComponent } from './components/todocontainer/todocontainer.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';



@NgModule({
  declarations: [
    AppComponent,
    TodocontainerComponent,
    TodoitemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
