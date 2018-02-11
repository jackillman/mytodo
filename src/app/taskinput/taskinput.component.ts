import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-taskinput',
  templateUrl: './taskinput.component.html',
  styleUrls: ['./taskinput.component.css']
})
export class TaskinputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

@Output() onSubmit = new EventEmitter<any>();
submit(form: NgForm){
    this.onSubmit.emit(form);
    form.form.reset();
    
}
}
