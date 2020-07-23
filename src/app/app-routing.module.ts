import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { Item1Component } from './Pages/item1/item1.component';
import { Item2Component } from './Pages/item2/item2.component';
import { Item3Component } from './Pages/item3/item3.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'item1', component: Item1Component},
  {path: 'item2', component: Item2Component},
  {path: 'item3', component: Item3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
