import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/models';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }

}
