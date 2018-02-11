import { Injectable } from '@angular/core';
import {data} from './data';
import { Task } from './task.model';


@Injectable()
export class TaskService {
  tasks:Task[] = data;
  bool:boolean = false;
  constructor() { }

getData():Task[]{
  return this.tasks;
}

deleteTask(task){
  let ind = this.tasks.indexOf(task);
  console.log()
  if(ind > -1){
    this.tasks.splice(ind,1);
  }
  
}
toggle(){
  // this.bool =!this.bool;
  // console.log(this.bool)
}
create(a,b,c){
 let tk = new Task(a,b,c)
this.tasks.push(tk);
}
}
