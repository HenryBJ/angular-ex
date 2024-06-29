import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { API_URL } from '../../api.config';

export interface Todo {
  id: string;
  title: string;
  description: string;
  complete: boolean;
}

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':  'application/json',
  'Access-Control-Allow-Origin': '*' ,
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl =  API_URL;


  constructor(private http: HttpClient) {}

  private transformTodo(todo: any): Todo {
    return {
      id: todo._id,
      title: todo.title,
      description: todo.description,
      complete: todo.complete
    };
  }


  getTodos(): Observable<Todo[]> {
      return this.http.get<Todo[]>(this.apiUrl, httpOptions).pipe(map((list:Todo[])=>list.map(this.transformTodo)));
    }

  addTodo(todo: Todo): Observable<Todo> {
    console.log(todo);
      return this.http.post<Todo>(this.apiUrl, todo, httpOptions).pipe(
        map(this.transformTodo)
      );
    }

  updateTodo(id: string, todo: Todo): Observable<Todo> {
      return this.http.put<Todo>(`${this.apiUrl}/${id}`, todo, httpOptions).pipe(
        map(this.transformTodo)
      );
    }

  getById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`, httpOptions).pipe(
      map(this.transformTodo)
    );
  }

  deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, httpOptions);
  }
}
