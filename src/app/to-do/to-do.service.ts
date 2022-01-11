import { Injectable } from '@angular/core';
import { ToDo } from './todo.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private REST_API_SERVER = "https://gorest.co.in/public/v1/users";
  constructor(private httpClient: HttpClient) { }

  sendGetRequest():Observable<any[]> {
   return this.httpClient.get<any[]>(this.REST_API_SERVER);
  }
  getToDos(): ToDo[]{
      return [{
        Id:1,
        Nome :'Teste',
        Status: 'Novo'

    },{
      Id:2,
      Nome :'Teste 2',
      Status: 'Novo'
  }];
}

}
