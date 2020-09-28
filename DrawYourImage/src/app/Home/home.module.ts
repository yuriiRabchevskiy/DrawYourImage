import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeComponent },  { path: '**', component: HomeComponent }];
@NgModule({
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent],
  providers: []
})

export class HomeModule {
  constructor() {}
}
