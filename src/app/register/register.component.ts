import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from "../_Structure/services/auth.service";
import { AlertifyService } from "../_Structure/core/alertify.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {}
  @Output() cancelRegisterFromChild = new EventEmitter();

  constructor(private authService:AuthService, private alert:AlertifyService) {
  }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.model).subscribe((response:any) => {
      this.alert.success('Registration Successful')
    }, error => {
      this.alert.error(`An error Occurred. Which is : ${error}`);
    })
  }

  cancel() {
    this.cancelRegisterFromChild.emit(false);
  }
}
