import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()

export class RoleGuardService implements CanActivate {

  IsApprover: string;

  constructor(private toastr: ToastrService, private router: Router) { }

  canActivate(): boolean {
    this.IsApprover = localStorage.getItem('approver');
    

    if (this.IsApprover == "True") {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }   
  }
}
