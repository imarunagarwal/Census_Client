import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PopulationRegisterService } from '../../shared/Population/population-register.service';
import { NgForm } from '@angular/forms';
import { RegisterPopulation } from '../../shared/Population/population.model';
import { RelationToHead, Gender_, MaritalStatus_, Occupation_ } from '../../shared/Enums/shared.enum';
import { HousingService } from 'src/app/shared/House/housing.service';
import { HouseListingComponent } from '../house-listing/house-listing.component';

@Component({
  selector: 'app-population-register',
  templateUrl: './population-register.component.html',
  styleUrls: ['./population-register.component.css']
})
export class PopulationRegisterComponent implements OnInit {
  public relationToHead: any;
  public gender: any;
  public maritalStatus: any;
  public occupation: any;

  fullNamePattern: string = "^[a-zA-Z]+$";

  public isMarried: boolean = false;

  population: RegisterPopulation;

  constructor(private registerService: PopulationRegisterService, private toastr: ToastrService, private housingService: HousingService) {
    this.relationToHead = Object.keys(RelationToHead).filter(k => isNaN(Number(k)));
    this.gender = Object.keys(Gender_).filter(k => isNaN(Number(k)));
    this.maritalStatus = Object.keys(MaritalStatus_).filter(k => isNaN(Number(k)));
    this.occupation = Object.keys(Occupation_).filter(k => isNaN(Number(k)));
  }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.population = {
      NPRID: null,
      FullName: '',
      CensusHouseNoID: null,
      RelationshipToHead: null,
      Gender: null,
      DOB: null,
      MaritalStatus: null,
      AgeAtMarriage: null,
      Occupation: null,
      NatureOfOccupationIndustry: ''
    }
  }

  ShowAge(val: any) {
    if (val == "Married") {
      this.isMarried = true;
    }
  }

  OnSubmit(form: NgForm) {
    this.housingService.GetHouseByID(this.population.CensusHouseNoID).subscribe((data: HouseListingComponent) => {
      if (data != null) {
        this.registerService.RegisterPop(form.value)
          .subscribe((data: RegisterPopulation) => {
            if (data == null) {
              this.resetForm(form);
              this.toastr.success('Person registration Un-successful Please fill Correct House ID.');
            }
            this.resetForm(form);
            this.toastr.success('Person registration successful');
          });
      }
      else
        this.toastr.error("Wrong House-ID");
    })
  }

}
