import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.model';
import { data } from '../data';
import {TaskService} from '../task.service';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
tasks:Task[];
  @Input() title1;
 @Input() desc1;
 comp = false;
  
  constructor(private taskService:TaskService) { }
  
  ngOnInit() {
    this.tasks = this.taskService.getData();
  }
  delete(task){
    this.taskService.deleteTask(task)
  }
  toggle(){
  
    // this.taskService.toggle();

  }
  create(tit, des, comp){
    this.taskService.create(tit, des, comp)
   
    
  }
}
