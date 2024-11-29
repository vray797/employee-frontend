import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { Employee } from '../Interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:9090/api/employees';

  constructor(private httpClient: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.apiUrl);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.apiUrl, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.apiUrl}/${employee.employeeId}`, employee);
  }

  deleteEmployee(employeeId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${employeeId}`);
  }
}
