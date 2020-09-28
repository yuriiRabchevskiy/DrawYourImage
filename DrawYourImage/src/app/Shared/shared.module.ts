import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './Loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  declarations: [LoaderComponent],
  providers: []
})
export class ShareModule {}
