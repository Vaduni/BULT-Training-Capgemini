import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from './Employee';
 
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
//EmployeeAngularApp
 
private baseUrl = 'http://localhost:8080/employees'; 
constructor(private http: HttpClient) { }
 
getEmployees(): Observable<Employee[]>
{
  console.log('Fetching employees from:', this.baseUrl);
  return this.http.get<Employee[]>(this.baseUrl);
}
 
 
 
}