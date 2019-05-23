import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from './user.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:61636';
  id: number;
  private bs: BehaviorSubject<number> = new BehaviorSubject<number>(this.id); 

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      UserID: 0,
      EmailID: user.EmailID,
      Password: user.Password,
      ImageUrl: user.ImageUrl,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Address: user.Address,
      State: user.State,
      Age: user.Age,
      AadharNo: user.AadharNo,
      IsApproved: 0,
      IsApprover: false,
    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/api/User', body, { headers: reqHeader });
  }

  userAuthentication(userName: string, password: string) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  
  UpdateId(id: number) {
    this.id=id;
    this.bs.next(this.id);
  }
  
  GetBehaviourService():BehaviorSubject<number>{
    return this.bs;
  }

  GetUser(id: number) {
    return this.http.get(this.rootUrl + `/api/User/${id}`);
  }
  
  GetPendingUsers(){
    return this.http.get(this.rootUrl+`/api/User?requestType=0`);
  }
  
  GetDeclinedUsers(){
    return this.http.get(this.rootUrl+`/api/User?requestType=1`);
  }
  
  GetApprovedUsers(){
    return this.http.get(this.rootUrl+`/api/User?requestType=2`);
  }
  
  UpdateStatus(stat:number,id:number){
    return this.http.put(this.rootUrl+`/api/User/${id}?stat=${stat}`,null);
  }
}
