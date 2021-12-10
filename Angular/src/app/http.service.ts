import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { 
  }
  
  getAll(){
    return this._http.get('http://localhost:8080/authors');
  }

  getbyId(id: any) {
    let url= id;
    return this._http.get('http://localhost:8080/authors/'+url);
  }

  delete(id: any) {
    return this._http.delete(`http://localhost:8080/authors/${id}`)
  }

  add(newTask: any) {
    return this._http.post('http://localhost:8080/authors', newTask);
  }

  create(newTask:any){
    return this._http.post(`http://localhost:8080/authors`, newTask)
  }

  edit(id:string, edited:any){
    let url= id;
    return this._http.put('http://localhost:8080/authors/'+url, edited)
  }

}