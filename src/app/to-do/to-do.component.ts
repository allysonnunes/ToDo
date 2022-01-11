import { Component, OnInit } from '@angular/core';
import { ToDoService } from './to-do.service';
import { ToDo } from './todo.model';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  todo: ToDo = {};
  novoTodo: ToDo = {};
  todos: ToDo[] = [];
  repos :any[] =[];
  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
  this.getToDos();
 this.toDoService.sendGetRequest().subscribe(response=> {
        this.repos= response;
 });
  }

  getToDos(): void{
    this.todos =this.toDoService.getToDos();
  }

  onEdit(item:ToDo){
    this.todo = Object.assign({}, item);
    console.log(this.todo);
  }

  onDelete(item:ToDo){
    this.todo = Object.assign({}, item);
    console.log(this.todo);
  }
  onEditConfirm(item:ToDo){
    console.log(item);
  }

  onDeleteConfirm(item:ToDo){
    console.log(item);
  }

  onSalvar(item:ToDo){
    console.log(item);
    this.todos.push(item);
    this.novoTodo = {};
  }


}
