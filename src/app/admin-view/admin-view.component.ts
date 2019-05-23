import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
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
