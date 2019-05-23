import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/User/user.model';
import { UserService } from '../../shared/User/user.service';


@Component({
  selector: 'app-approved-requests',
  templateUrl: './approved-requests.component.html',
  styleUrls: ['./approved-requests.component.css']
})
export class ApprovedRequestsComponent implements OnInit {

  users:User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.RefreshList();
  }

  ngOnChanges() {
    this.RefreshList();
  }

  RefreshList(){
    this.userService.GetApprovedUsers().subscribe((data:User[]) =>{
      this.users=data;
    })
  }

}
