import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos, HttpClientService } from './http-client.services';
import { from, of, Observable } from 'rxjs';


@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})
export class HttClientComponent implements OnInit {
  todos: Todos[] = [];
  todoTitle: string = '';
  constructor(
    private http: HttpClient,
    private httpClientServ: HttpClientService
  ) {

  }

  ngOnInit(): void {
    this.fetchTodo();
  }

  fetchTodo() {
    this.httpClientServ.fetchTodo().subscribe((response) => {

      this.todos = response;

    });
  }

  addTodo(): void {
    const todo: Todos = {
      completed: false,
      title: this.todoTitle,
    };

    this.httpClientServ.addTodo(todo).subscribe((response) => {

      this.todos.push(response);

      this.todoTitle = '';
    });
  }
}
