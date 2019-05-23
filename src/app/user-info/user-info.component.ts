import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/User/user.model';
import { UserService } from '../shared/User/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userData: User;
  id: number;
  status: string;

  constructor(private router: Router, private userService: UserService, private toastr: ToastrService) { }

  RefreshPage() {
    this.userService.GetBehaviourService().subscribe((data) => {
      this.id = data;
    });

    this.userService.GetUser(this.id).subscribe((data: any) => {
      if(data!=null){

        this.userData = data;
        
        if (this.userData.IsApproved == 0) {
          this.status = "Pending";
        }
        else {
          this.status = "Declined";
        }
      }
      else{
        this.toastr.success('Error Occured Re-login');
        localStorage.removeItem('userToken');
        this.router.navigate(['/home']);    
      }
    });
  }

  ngOnInit() {
    this.RefreshPage();
  }

  ngOnChanges() {
    this.RefreshPage();
  }

  Logout() {
    this.toastr.success('Logged Out successfully');
    localStorage.removeItem('userToken');
    this.router.navigate(['/home']);
  }

  DashBoard() {
    this.router.navigate(['/dashboard']);
  }
}
