import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ProdsComponent } from './prods/prods.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"prods",
    component:ProdsComponent
  },
  {
    path:"clients",
    component:ClientsComponent
  },
  {
    path:"contacts",
    component:ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
