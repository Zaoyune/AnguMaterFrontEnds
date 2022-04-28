import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ControllerServiceService} from '../controller-service.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

 import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {Reservation} from '../modules/Model/Reservation';
interface Ipays{
  id:string;
  nom?:string;
  capitale?:string;
  img?:string;
  ext?:string;



}
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})

export class RoomComponent implements OnInit {
 idRes:number;
  public ListRooms: any;
  public ListClients:any;
  filterTerm: string;

  p:number = 1;

  dataSource: MatTableDataSource<Ipays>;
  pays: any;
  err: void;
  Reservation:any;
  closeResult: string;
  clients:any;
  nom;any;
  res:any;
  columns: string[] = ['id','numChambre','suite','dispo','actions'];
  @ViewChild(MatSort, {static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private Service: ControllerServiceService,private modalService : NgbModal,
              private httpClient : HttpClient,private toastr :ToastrService,
              private activatedRoute: ActivatedRoute,private router :Router) {

   // this.idRes = activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {


    this.Service.getC()
      .subscribe(data=>{
        // @ts-ignore

        this.res=data;

        console.log(data)
      },err=>{
        console.log(err);
      });

      this.onSelectClients();
      this.onSelectRooms();
  }




  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



  onSubmit(f: NgForm) {
    const url = 'http://localhost:8080/hotel/addRes';
    this.httpClient.post(url, f.value)

      .subscribe((result) => {
        this.toastr.success("Votre Reservation a été ajouté !")

        this.ngOnInit();

        //reload la  table
      })
     this.modalService.dismissAll(); //dismiss the modal
  }
  onSelectClients(){
    this.Service.getClients().subscribe(data=>{
      console.log(data)
      this.ListClients=data

    },err=>{
      console.log(err);
    })
  }
  onSelectRooms(){
    this.Service.getRooms().subscribe(data=>{
      console.log(data)
      this.ListRooms=data

    },err=>{
      console.log(err);
    })
  }
  onGetres(id:any) {

    this.router.navigate(['res-d',id]);
  }
  openDetails(targetModal, res: Reservation) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });

    document.getElementById('dated').setAttribute('value', res.date_debut);
    document.getElementById('datef').setAttribute('value', res.date_fin);
    document.getElementById('prce').setAttribute('value', res.price);
    document.getElementById('num').setAttribute('value', res.chambre);
    document.getElementById('prn').setAttribute('value', res.client);


 }

}

