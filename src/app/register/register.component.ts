import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  DashBoard(){
    this.router.navigate(['/dashboard']);
  }

  Logout() {
    this.toastr.success('Logged Out successfully');
    localStorage.removeItem('userToken');
    this.router.navigate(['/home']);
  }


}
