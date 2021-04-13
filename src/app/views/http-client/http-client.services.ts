import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todos {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({ providedIn: 'root' })
export class HttpClientService {
  constructor(private http: HttpClient) {}

  fetchTodo(): Observable<Todos[]> {
    return this.http.get<Todos[]>(
      'https://jsonplaceholder.typicode.com/todos?_limit=4'
    );
  }

  addTodo(todo: Todos): Observable<Todos> {
    return this.http.post<Todos>(
      'https://jsonplaceholder.typicode.com/todos',
      todo
    );
    // .subscribe((response) => {
    //   console.log(response);
    //   this.todos.push(response);
    //   console.log(this.todos);
    //   this.todoTitle = '';
    // });
  }
}
