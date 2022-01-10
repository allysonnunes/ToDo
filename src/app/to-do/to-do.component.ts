import { Component, OnInit } from '@angular/core';
import { ToDo } from './todo.model';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  todos: ToDo[] =
      [{
        Id:1,
        Nome :'Teste'
    },{
      Id:2,
      Nome :'Teste 2'
  }];
  constructor() { }

  ngOnInit(): void {
  }
}
