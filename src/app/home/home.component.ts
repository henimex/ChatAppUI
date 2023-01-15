import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode: boolean = false;
  values: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getValues();
  }

  registerToggle() {
    this.registerMode = true
  }

  getValues() {
    this.http.get("http://localhost:5105/api/values").subscribe((data) => {
      console.log(data);
      this.values = data;
    }, error => {
      console.log("An Error Recived On Subscription ", error);
    })
  }

  cancelRegisterFunction(status: boolean) {
    this.registerMode = status;
  }
}
