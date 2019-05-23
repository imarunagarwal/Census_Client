import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/User/user.service';
import { User } from '../../shared/User/user.model';


@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {
  users:User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.RefreshList();
  }


  RefreshList(){
    this.userService.GetPendingUsers().subscribe((data:User[]) =>{
      this.users=data;
    })
  }

  updateStat(stat:number,id:number){

    this.userService.UpdateStatus(stat,id).subscribe((data:User)=>{
      this.RefreshList();
    })
    
  }

}
