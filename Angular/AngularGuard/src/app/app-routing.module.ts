import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';
import { FormsGuard } from './guard/forms.guard';



const routes: Routes = [

  { path:'',redirectTo:'/home',pathMatch:'full' },
  { path:'home',component:HomeComponent, canActivate:[AuthGuard] },
  { path:'contact/:id',component:ContactComponent, canActivateChild:[AdminGuard]},
  { path:'about',component:AboutComponent, canDeactivate:[FormsGuard]},

  { path:'**',component:PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
