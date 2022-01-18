import { Component, OnInit } from '@angular/core';
import { ToDoService } from './to-do.service';
import { ToDo } from './todo.model';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  todo: ToDo = {Id:0};
  novoTodo: ToDo = {Id:0};
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
    this.todos.forEach(element => {
      if(element.Id == item.Id){
        element.Nome = item.Nome;
        element.Status = item.Status;
      }
    });
    console.log(item);
  }

  onDeleteConfirm(item:ToDo){
    debugger;
    for(var  i= 0;i<  this.todos.length; i++){
      if(this.todos[i].Id == item.Id){
        this.todos.splice(i, 1);
      }
    }
       console.log(item);
  }

  onSalvar(item:ToDo){
    console.log(item);
    let max  = 0;
    this.todos.forEach(element => {
      max = (element.Id> max)?element.Id:max ;
    });
    item.Id = max+1;
    item.Status= 'Novo';
    this.todos.push(item);
    this.novoTodo.Nome = '';
  }
}
