import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/User/user.model';
import { UserService } from '../../shared/User/user.service';

@Component({
  selector: 'app-declined-requests',
  templateUrl: './declined-requests.component.html',
  styleUrls: ['./declined-requests.component.css']
})
export class DeclinedRequestsComponent implements OnInit {

  users:User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.RefreshList();
  }

  ngOnChanges() {
    this.RefreshList();
  }

  RefreshList(){
    this.userService.GetDeclinedUsers().subscribe((data:User[]) =>{
      this.users=data;
    })
  }
}
