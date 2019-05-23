import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { House } from './House.model';

@Injectable()
export class HousingService {
  readonly rootUrl = 'http://localhost:61636';
  constructor(private http: HttpClient) { }

  RegisterHouse(house: House) {
    const body: House = {
      CensusHouseNoID: 0,
      BuildingNo: house.BuildingNo,
      Address: house.Address,
      State: house.State,
      HeadFullName: house.HeadFullName,
      HouseStatus: house.HouseStatus,
      NoOfRooms: house.NoOfRooms
    }
    return this.http.post(this.rootUrl + '/api/HouseListing', body);
  }

  GetHouseByID(id: number) {

    return this.http.get(this.rootUrl + `/api/HouseListing/${id}`);
  }
}
