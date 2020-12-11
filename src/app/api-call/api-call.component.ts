import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent implements OnInit {

  constructor(private http: HttpClient) { }

  calls: any;

  ngOnInit(): void {
  }

  getCall() {
    this.http.get("https://oatlxsdfeh.execute-api.us-east-1.amazonaws.com/Prod/hello")
    .subscribe((data) =>{
      this.calls = data;
    }
    );
  }


}
