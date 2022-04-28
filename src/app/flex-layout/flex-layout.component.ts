import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.scss']
})
export class FlexLayoutComponent   {


  columnDefs = [
    { headerName: "Make",field : "make" },
    { headerName: "Model",field : "model" },
    { headerName: "Price",field : "price" }
];
rowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 }
];

}
