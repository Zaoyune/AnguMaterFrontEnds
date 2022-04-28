import { Component, OnInit } from '@angular/core';
import {ControllerServiceService} from '../../controller-service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-adult-c',
  templateUrl: './adult-c.component.html',
  styleUrls: ['./adult-c.component.scss']
})
export class AdultCComponent implements OnInit {
  private clients: Object;
  filterTerm: string;

  p:number = 1;
  constructor(private Service: ControllerServiceService,private modalService : NgbModal,
              private httpClient : HttpClient,private toastr :ToastrService,
              private activatedRoute: ActivatedRoute,private router :Router) {

    // this.idRes = activatedRoute.snapshot.params['id'];

  }
  ngOnInit() {
    this.getAdults();
  }

  private getAdults() {
    this.Service.getAdultClients()
      .subscribe(data=>{
        this.clients=data;





        console.log(data)
      },err=>{
        console.log(err);
      });
  }
}
