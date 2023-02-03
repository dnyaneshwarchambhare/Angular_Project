import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';
import { FormsGuard } from './guard/forms.guard';




@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ AuthGuard,AdminGuard,FormsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
