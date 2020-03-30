import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './Servie/login.service';
import { User }from '../Components/login/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;


  constructor() { }

  ngOnInit() {
    this.LoginForm = new FormGroup({

      Username: new FormControl(),
      Password: new FormControl()
    });
  
  }
  onSubmit(): void {
    console.log(this.LoginForm.value);
  }
}
