import { Component, OnInit, Input, SimpleChanges, Output,EventEmitter } from '@angular/core';
import { Task } from '../task.model';


@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent implements OnInit {
 
 @Input() task:Task;
 @Output() onDelete = new EventEmitter();
bool:number;
  constructor() { }

  ngOnInit() {
    
  }
  toggle(){
    this.task.complated =!this.task.complated;
    if(this.task.complated){
      this.bool = 1
    } else {
      this.bool = 0
    }
   
  }
  delete(){
    this.onDelete.emit();
  }
  showOptions(t){
    this.toggle();
    console.log( this.task.complated)
    console.log(t.checked)
    // this.task.complated =!this.task.complated;
    
  }
}
