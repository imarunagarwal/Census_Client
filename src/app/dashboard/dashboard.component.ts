import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/User/user.service';
import { User } from '../shared/User/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id:number;
  flag:boolean=false;
  constructor(private router: Router, private toastr: ToastrService,  private userService: UserService) { }

  ngOnInit() {
    this.userService.GetBehaviourService().subscribe((data) =>{
      this.id=data;
    });
    this.userService.GetUser(this.id).subscribe((data:User) =>{
      if(data.IsApproved == 2){
        this.flag=true;
      }
    })
  }

  Logout() {
    this.toastr.success('Logged Out successfully');
    localStorage.removeItem('userToken');
    this.router.navigate(['/home']);
  }

  RegisterHouse() {
    this.router.navigate(['/house']);
  }


  RegisterPerson() {
    this.router.navigate(['/population']);
  }
  
  
  AgeGraph() {
    this.router.navigate(['/ageWise']);
  }


  StateGraph() {
    this.router.navigate(['/stateWise']);
  }
}
