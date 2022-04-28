import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import {HomeComponent} from './home/home.component';
import {RoomComponent} from './room/room.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import {ResDComponent} from './res-d/res-d.component';
import {ClientsComponent} from './clients/clients.component';
import {AdultCComponent} from './clients/adult-c/adult-c.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  },
    {
      path: 'rooms',
      component: RoomComponent
    }
    ,
    {
      path: 'res-d/:id', component: ResDComponent
    },
    {
      path: 'flex',
      component: FlexLayoutComponent
    }
    ,
    {
      path: 'clients',
      component: ClientsComponent
    },
    {
      path: 'adult',
      component: AdultCComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
