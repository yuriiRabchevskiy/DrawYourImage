import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IImageData, IImagePixelData } from '../model/ImageModel';
import { ProgressService } from '../services/Progress.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  @ViewChild('canvasImg', { static: true }) public canvasImg;
  private image = null;
  viewBox: string = '0 0 800 600';
  url: string | ArrayBuffer = null;
  width: number = 800;
  height: number = 600;

  constructor(private http: HttpClient, private progress: ProgressService) {
    this.http.get('./../../assets/Images/test.jpg', { responseType: 'blob' })
      .subscribe(res => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.image = new Image();
          this.image.src = reader.result as string;
          this.url = reader.result;
          this.image.onload = () => {
            this.width = this.image.width;
            this.height = this.image.height;
            this.viewBox = `0 0 ${this.width} ${this.height}`;
            this.drawImage();
          };
        };
        reader.readAsDataURL(res);
      });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e) => {
        this.image = new Image();
        this.image.src = e.target.result as string;
        this.url = e.target.result;
        this.image.onload = () => {
          this.width = this.image.width;
          this.height = this.image.height;
          this.viewBox = `0 0 ${this.width} ${this.height}`;
          this.drawImage();
        };
      };
    }
  }

  parseImage() {
    const _size = this.width * this.height;
    const obj = new Object();
    const ctx = this.canvasImg.nativeElement.getContext('2d'); // .getImageData(1, 1, 1, 1).data
    let index = 0;
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        const _data = new Array(ctx.getImageData(col, row, 1, 1).data);
        const color = this.convertRGBAtoHEX([_data[0][0], _data[0][1], _data[0][2]]);
        const newItem: IImagePixelData = {
          x: col,
          y: row,
          color,
        };
        if (!obj[`color${color}`]) {
          const _obj: IImageData = {
            colorId: color,
            data: [newItem],
          };
          obj[`color${color}`] = _obj;
        } else {
          obj[`color${color}`].data.push(newItem);
        }
        index++;
      }
      const prod = Math.round(index * 100 / _size);
      this.progress.updateProgress(prod);
    }
    console.log(obj);
  }

  convertRGBAtoHEX(channels) {
    const hexChannels = channels.map(entry => (`0${entry.toString(16)}`).slice(-2));
    return (`#${hexChannels.join('')}`);
  }

  drawImage() {
    this.canvasImg.nativeElement.width = this.width;
    this.canvasImg.nativeElement.height = this.height;
    const ctx = this.canvasImg.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, 400, 400);
    ctx.drawImage(this.image, 0, 0, this.width, this.height);
  }
}
