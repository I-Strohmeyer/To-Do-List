import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodocontainerComponent } from './components/todocontainer/todocontainer.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import { NaviComponent } from './components/navi/navi.component';
import { HeroComponent } from './components/hero/hero.component';
import { NewtaskComponent } from './components/newtask/newtask.component';



@NgModule({
  declarations: [
    AppComponent,
    TodocontainerComponent,
    TodoitemComponent,
    NaviComponent,
    HeroComponent,
    NewtaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
