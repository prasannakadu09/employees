import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

	employees : any[];

  constructor() {
  	this.employees = [
			{
			"employeeCode":"E1",
			"name":"romin irani",
			"address":"Baner, Mumbai pune Road, Pune",
			"email":"romin.k.irani@gmail.com",
			"mobileNumber":"+91 9812465780",
			"click": "Add More"
			},
			{
			"employeeCode":"E2",
			"name":"neil kumar",
			"address":"Balaji Nagar, Virar Mumbai ",
			"email":"neilkumar@gmail.com",
			"mobileNumber":"+91 9821645781",
			"click": "Add More"
			}
];

   }

  ngOnInit() {
  }


}
