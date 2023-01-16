import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from "../_Structure/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {}
  @Output() cancelRegisterFromChild = new EventEmitter();

  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.model).subscribe((response:any) => {
      console.log('reg successfull')
    }, error => {
      console.log('error ', error);
    })
  }

  cancel() {
    this.cancelRegisterFromChild.emit(false);
  }
}
