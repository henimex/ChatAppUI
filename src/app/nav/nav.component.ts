import { Component, OnInit } from '@angular/core';
import { AuthService } from "../_Structure/services/auth.service";
import { AlertifyService } from "../_Structure/core/alertify.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(
    public authService:AuthService,
    private alert:AlertifyService
  ) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alert.success("Successfully Logged In")
    }, error => {
      this.alert.error("An Error Occurred")
    })
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token')
    this.alert.message("Logout Successful")
  }
}
