import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterPopulation } from './population.model';

@Injectable()
export class PopulationRegisterService {

  readonly rootUrl = 'http://localhost:61636';
  constructor(private http: HttpClient) { }


  RegisterPop(registerPop: RegisterPopulation) {
    const body: RegisterPopulation = {
      NPRID: 0,
      FullName: registerPop.FullName,
      CensusHouseNoID: registerPop.CensusHouseNoID,
      RelationshipToHead: registerPop.RelationshipToHead,
      Gender: registerPop.Gender,
      DOB: registerPop.DOB,
      MaritalStatus: registerPop.MaritalStatus,
      AgeAtMarriage: registerPop.AgeAtMarriage,
      Occupation: registerPop.Occupation,
      NatureOfOccupationIndustry: registerPop.NatureOfOccupationIndustry
    }
    return this.http.post(this.rootUrl + '/api/PopulationRegistration', body);
  }

}
