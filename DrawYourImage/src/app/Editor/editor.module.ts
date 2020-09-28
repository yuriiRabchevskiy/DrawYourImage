import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../Shared/shared.module';
import { EditorComponent } from './editor.component';
import { EditPanelComponent } from './EditPanel/edit-panel.component';

const routes: Routes = [{ path: '', component: EditorComponent },  { path: '**', component: EditorComponent }];
@NgModule({
  imports: [CommonModule, ShareModule, RouterModule, RouterModule.forChild(routes)],
  declarations: [EditorComponent, EditPanelComponent],
  providers: []
})

export class EditorModule {
  constructor() {}
}
