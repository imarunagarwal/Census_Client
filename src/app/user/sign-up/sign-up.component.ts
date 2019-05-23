import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { User } from '../../shared/User/user.model';
import { UserService } from '../../shared/User/user.service';
import { States } from '../../shared/Enums/shared.enum';
import { Router } from '@angular/router';





@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  tempEmail: User;
  tempAadhar: User;

  email: string;
  aadhar: string;

  public states;
  imageUrl: string = "/assets/download.png";

  passwordPattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]).{8,}";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  aadharPattern = "^[0-9]*$";
  fileToUpload: File = null;
  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) {
    this.states = Object.keys(States).filter(k => isNaN(Number(k)));
  }

  ngOnInit() {
    this.resetForm();
  }


  FileSelect(evt) {
    const files = evt.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = this
        .handleReaderLoaded
        .bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.imageUrl = btoa(binaryString);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserID: null,
      EmailID: '',
      Password: '',
      ImageUrl: '',
      FirstName: '',
      LastName: '',
      Address: '',
      State: "",
      Age: null,
      AadharNo: "",
      IsApproved: 0,
      IsApprover: false,
    }
  }

  OnSubmit(form: NgForm) {

    form.value.ImageUrl = this.imageUrl;

    this.userService.registerUser(form.value)
      .subscribe((data: User) => {
        if(data!=null){
          if (data.Password != null) {
            this.resetForm(form);
            this.userService.UpdateId(data.UserID);
            this.toastr.success('User registration successful');
            this.toastr.info("While Your Request is Being Approved Please login to Check your application status.");
            this.router.navigate(['/home']);
          }
          else {
            if (data.EmailID != null) {
              this.toastr.error("Email Id Already Exists.");
            }
            if (data.AadharNo != null) {
              this.toastr.error("Aadhar no. Already Exists.");
            }
          }
        }
        else{
          this.toastr.error("Error Occured!.");
        }
      });
  }

}
