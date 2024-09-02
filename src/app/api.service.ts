import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment'; // Ajusta la ruta si es necesario


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  addItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }


}
