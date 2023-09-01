import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  isValid!: boolean;
  observable!: any;
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit(formVal: any) {
    if (
      formVal.value.username == 'rohit' &&
      formVal.value.password == '12345'
    ) {
      this.router.navigate(['product-list']);
    } else {
      alert('Invalid credentials!!');
    }
  }
}
