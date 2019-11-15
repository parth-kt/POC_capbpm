import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ChecklistService {

  constructor(private http: HttpClient) {
   }

   getAllCheckList() {
    return this.http.get<any>(`${environment.apiUrl}/Checklist/findAll`);
   }
}
