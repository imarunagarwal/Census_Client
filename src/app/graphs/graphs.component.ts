import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }
  Logout() {
    this.toastr.success('Logged Out successfully');
    localStorage.removeItem('userToken');
    this.router.navigate(['/home']);
  }

  DashBoard(){
    this.router.navigate(['/dashboard']);
  }

}
