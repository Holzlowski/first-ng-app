import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [{
    userID: 1,
    completed: false,
    title: 'Todo 1',
    id: 1
  }, {
    userID: 2,
    completed: true,
    title: 'Todo 2',
    id: 2
  }, {
    userID: 3,
    completed: false,
    title: 'Todo 3',
    id: 3
  }];
  constructor() { }
}
