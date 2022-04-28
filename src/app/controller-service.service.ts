import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControllerServiceService {
  public host:string="http://localhost:8080/hotel";
  constructor(private httpClient: HttpClient) { }


  getReByid(id: number) {
    return this.httpClient.get(this.host + "/res/" + id);

  }
  public getC(){
    return this.httpClient.get(this.host+"/res");
  }
  public getAdultClients(){
    return this.httpClient.get(this.host+"/adults");
  }
  public getRooms(){
    return this.httpClient.get(this.host+"/room");
  }
  public getClients(){
    return this.httpClient.get(this.host+"/clients");
  }

}
