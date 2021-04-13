import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos, HttpClientService } from './http-client.services';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css'],
})
export class HttClientComponent implements OnInit {
  todos: Todos[] = [];
  todoTitle: string = '';
  constructor(
    private http: HttpClient,
    private httpClientServ: HttpClientService
  ) {}

  ngOnInit(): void {
    this.fetchTodo();
  }

  fetchTodo() {
    this.httpClientServ.fetchTodo().subscribe((response) => {
      console.log(response);
      this.todos = response;
      // console.log(1111, this.todos);
    });
  }

  addTodo(): void {
    const todo: Todos = {
      completed: false,
      title: this.todoTitle,
    };

    this.httpClientServ.addTodo(todo).subscribe((response) => {
      console.log(response);
      this.todos.push(response);
      console.log(this.todos);
      this.todoTitle = '';
    });
  }
}
