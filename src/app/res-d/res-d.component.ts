import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
 import {ControllerServiceService} from '../controller-service.service';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

 import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
@Component({
  selector: 'app-res-d',
  templateUrl: './res-d.component.html',
  styleUrls: ['./res-d.component.scss']
})

export class ResDComponent implements OnInit {

  // @ts-ignore
  @ViewChild('pdfTable') pdfTable: ElementRef;

  public downloadAsPDF() {
    const doc = new jsPDF();

    const pdfTable = this.pdfTable.nativeElement;

    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();

  }
  idRes:number;

  closeResult: string;
  reservation: any;
  constructor(private Service: ControllerServiceService,private modalService : NgbModal,
              private httpClient : HttpClient,private toastr :ToastrService,
              private activatedRoute: ActivatedRoute,private router :Router) {

    this.idRes = activatedRoute.snapshot.params['id'];

  }
  ngOnInit() {


    this.Service.getReByid(this.idRes)
      .subscribe(data => {
        // @ts-ignore
        this.reservation = data;

      }, error => {
        console.log(error);
      });
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






}
