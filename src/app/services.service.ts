import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // *Ya no necesario por el proxy en proxy.conf.json*
  // url ="https://www.fruityvice.com/api/fruit";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>("/api/fruit/all");
  } 

  getItem(name: string): Observable<any> {
    return this.http.get<any>("/api/fruit/" + name);
  }
}
