import { Component, NgModule, OnInit } from '@angular/core';
import { Employee } from '../../Interfaces/employee';
import { EmployeeService } from '../../services/employee.service';
import { NgFor } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)'}),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ opacity: 0, transform: 'translateY(-10px)'}))
      ])
    ])
  ]
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
      this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.getEmployee().subscribe((data: Employee[]) => {
      if (data) {
        this.employees = data;
      }
    })
  }

}
