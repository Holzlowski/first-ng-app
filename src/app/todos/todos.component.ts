import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService.getTodosFromApi()
      .pipe(
        catchError((error) => {
          console.error('Error fetching todos:', error);
          throw error;
        })
      ).subscribe(
        (todos) => {
          this.todoItems.set(todos); // set the signal with the fetched todos
        });
  }
}
