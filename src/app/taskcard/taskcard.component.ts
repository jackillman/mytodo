import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { data } from '../data';

import {TaskService} from '../task.service';
@Component({
  selector: 'app-taskcard',
  templateUrl: './taskcard.component.html',
  styleUrls: ['./taskcard.component.css']
})
export class TaskcardComponent implements OnInit {

title;
desc;
  constructor(private taskservice:TaskService) { }

  ngOnInit() {
  }
  create(e){
    
    this.title = e.value.title;
    this.desc = e.value.desc;
    this.taskservice.create(this.title,this.desc,false)
   
  }
}
