import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AppComponent } from './app.component';
import { TaskinputComponent } from './taskinput/taskinput.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskitemComponent } from './taskitem/taskitem.component';
import {TaskService} from './task.service';
import { TaskcardComponent } from './taskcard/taskcard.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TaskinputComponent,
    TasklistComponent,
    TaskitemComponent,
    TaskcardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
