import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.scss']
})
export class EditPanelComponent {

  @Output() onChangeImage: EventEmitter<any> = new EventEmitter<any>();
  @Output() onParseImage: EventEmitter<any> = new EventEmitter<any>();

  onSelectFile(event) {
    this.onChangeImage.emit(event);
  }

  parseImage() {
    this.onParseImage.emit();
  }
}
