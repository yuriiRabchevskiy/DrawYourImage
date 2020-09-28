import { Component } from '@angular/core';
import { IPage } from './modal';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  pages: IPage[] = [];
  private _selectedPage: string;
  get selectedPage() {
    return this._selectedPage;
  }
  set selectedPage(page: any) {
    this.selectPage(page);
  }

  constructor() {
    this.pages = [
      { title: 'Home', url: 'home'},
      { title: 'Editor', url: 'editor' },
      { title: 'Other', url: 'other' },
    ];
  }

  selectPage(page: string) {
    this._selectedPage = page;
  }
}
