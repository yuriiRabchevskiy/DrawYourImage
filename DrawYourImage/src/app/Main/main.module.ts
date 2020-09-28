import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../Shared/shared.module';

const routes: Routes = [{
  path: '', component: MainComponent,
  children: [
    { path: 'home', loadChildren: () => import('./../Home/home.module').then(m => m.HomeModule), pathMatch: 'full' },
    { path: 'editor', loadChildren: () => import('./../Editor/editor.module').then(m => m.EditorModule), pathMatch: 'full' },
    // // Unexpected URL handling.
    { path: '', redirectTo: 'editor', pathMatch: 'full' },
    { path: '**', redirectTo: 'editor', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [CommonModule, ShareModule, RouterModule.forChild(routes)],
  declarations: [MainComponent],
  providers: []
})

export class MainModule {
  constructor() {}
}
