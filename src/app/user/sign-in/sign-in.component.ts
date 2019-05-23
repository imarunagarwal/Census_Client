import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../shared/User/user.model';
import { UserService } from '../../shared/User/user.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError: boolean = false;

  IsApprover: string;
  IsApproved: string;
  id: number;
  EmailID: string;
  Password: string;
  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit() {
    this.userService.userAuthentication(this.EmailID, this.Password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      localStorage.setItem('approver', data.val2);
      localStorage.setItem('approved', data.val3);
      this.id=Number(data.val1);
      this.IsApprover=data.val2;
      this.IsApproved=data.val3;

      this.userService.UpdateId(this.id);

      if (this.IsApprover == "True") {
        this.router.navigate(['/pending']);
      }
      else {
        if (this.IsApproved == "Approved") {

          this.router.navigate(['/dashboard']);
        }
        if (this.IsApproved == "Declined") {
          this.toastr.error("Your Request was Declined");

          this.router.navigate(['/userInfo']);
        }
        if (this.IsApproved == "Pending") {
          this.toastr.info("Your Request is Pending.");
          
          this.router.navigate(['/userInfo']);
        }
      }
    },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });
  }
}
