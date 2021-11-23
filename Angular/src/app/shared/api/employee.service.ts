import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Employee from '../models/employee';

@Injectable()
export default class EmployeeService {
  public API = 'http://localhost:8080/api';
  public Employees_API = `${this.API}/employees`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>(this.Employees_API);
  }

  get(id: string) {
    return this.http.get(`${this.Employees_API}/${id}`);
  }

  save(employee: Employee): Observable<Employee> {
    let result: Observable<Employee>;
    if (employee.ID) {
      result = this.http.put<Employee>(
        `${this.Employees_API}/${employee.ID}`,
        employee
      );
    } else {
      result = this.http.post<Employee>(this.Employees_API, employee);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.Employees_API}/${id.toString()}`);
  }
}