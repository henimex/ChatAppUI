import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getValues();
  }

  getValues() {
    this.http.get("http://localhost:5105/api/values").subscribe((data) => {
      console.log(data);
      this.values = data;
    }, error => {
      console.log("An Error Recived On Subscription ",error);
    })
  }
}
