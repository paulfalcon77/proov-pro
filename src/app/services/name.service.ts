import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  constructor(private _http: HttpClient) {}

  addNames(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/profile', data);
  }
  getNamesList(): Observable<any> {
    return this._http.get('http://localhost:3000/profile');
  }

  deleteName(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/profile/${id}`);
  }
}
