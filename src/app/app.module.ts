import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
 import {ScrollingModule} from '@angular/cdk/scrolling';

import {HttpClientModule} from '@angular/common/http';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';


import {
    MatAccordion,
    MatButtonModule, MatCardModule, MatDialogModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

import {ToastrModule} from 'ngx-toastr';
import { ResDComponent } from './res-d/res-d.component';
import { ClientsComponent } from './clients/clients.component';
import { AdultCComponent } from './clients/adult-c/adult-c.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    FlexLayoutComponent,
    ResDComponent,
    ClientsComponent,
    AdultCComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
      MatRadioModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        DefaultModule,
        MatSelectModule,
        Ng2SearchPipeModule,
        Ng2OrderModule,
        NgxPaginationModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        NgbModule,
        CdkAccordionModule,
        ScrollingModule,

        BrowserAnimationsModule,
        ToastrModule.forRoot({
            progressBar: true,

            progressAnimation: 'decreasing'
        }),
        AgGridModule.withComponents([]),
        MatCardModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
