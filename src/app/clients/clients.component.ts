import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ControllerServiceService} from '../controller-service.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
interface Iclient{
  id_client:string;
  prenom?:string;
  nom?:string;
  sexe?:string;
  email?:string;
  phone?:string;
  adult?:boolean;

}

class Adult {
  name:string;
}
class Sexe {
  name:string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})

export class ClientsComponent implements OnInit {
  adults:   Adult [] = [
    {name:'TRUE'},
    {name:'FALSE'},
  ];


  idCl:number;
  public ListRooms: any;
  public ListClients:any;
  filterTerm: string;

  p:number = 1;

  dataSource: MatTableDataSource<Iclient>;
  pays: any;
  err: void;
  Reservation:any;
  closeResult: string;
  clients:any;
  nom;any;
  client:any;
  columns: string[] = ['id_client','prenom','nom','sexe','email','phone','adult','actions'];
  @ViewChild(MatSort, {static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private Service: ControllerServiceService,private modalService : NgbModal,
              private httpClient : HttpClient,private toastr :ToastrService,
              private activatedRoute: ActivatedRoute,private router :Router) {

    // this.idRes = activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {
    this.getClients();
  }

  private getClients() {
    this.Service.getClients()
      .subscribe(data=>{
        this.clients=data;


        this.dataSource = new MatTableDataSource(this.clients);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;


        console.log(data)
      },err=>{
        console.log(err);
      });
  }
  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
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
    const url = 'http://localhost:8080/hotel/addClient';
    this.httpClient.post(url, f.value)

      .subscribe((result) => {
        this.toastr.success("Votre Client a été ajouté !")

        this.ngOnInit();

        //reload la  table
      })
    this.modalService.dismissAll(); //dismiss the modal
  }
}
