import { Component, OnInit } from '@angular/core';
import { House } from '../../shared/House/House.model';
import { ToastrService } from 'ngx-toastr';
import { HousingService } from '../../shared/House/housing.service';
import { NgForm } from '@angular/forms';
import { States, HouseRentalStatus } from '../../shared/Enums/shared.enum';

@Component({
  selector: 'app-house-listing',
  templateUrl: './house-listing.component.html',
  styleUrls: ['./house-listing.component.css']
})
export class HouseListingComponent implements OnInit {
  house :House;
  public states;    
  public houseStatus;
  
  constructor(private houseService :HousingService,private toastr: ToastrService) {
    this.states=Object.keys(States).filter(k=>isNaN(Number(k)));
    this.houseStatus=Object.keys(HouseRentalStatus).filter(k=>isNaN(Number(k)));
   }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.house = {
      CensusHouseNoID:null,
      BuildingNo: '',
      Address: '',
      State: '',
      HeadFullName: '',
      HouseStatus: null,
      NoOfRooms: null
    }
  }

  OnSubmit(form: NgForm) {
    this.houseService.RegisterHouse(form.value)
      .subscribe((data: House) => {
        if (data != null) {
          this.resetForm(form);
          this.toastr.success('House registration successful');
          this.toastr.info(`Please remember your house id :${data.CensusHouseNoID}`);
        }
        else
          this.toastr.error("You are not registered succussfully");
      });      
  }
}
