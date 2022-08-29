import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.getPdf(this.pdfs[0].source);
  }

  title = 'pdf-viewer-test';
  pdfs: any[] = [
    {
      title: '160F-2019',
      source: 'assets/160F-2019.pdf',
    },
    {
      title: '1000_Java_Tips_low.copy_1.1',
      source: 'assets/1000_Java_Tips_low.copy_1.1.pdf',
    },
    {
      title: 'AIDLandlordLeasingAgent',
      source: 'assets/AIDLandlordLeasingAgent.pdf',
    },
    {
      title: 'pdf-sample',
      source: 'assets/pdf-sample.pdf',
    },
    {
      title: 'user-experience',
      source: 'assets/user-experience.pdf',
    },
  ];
  currentSource!: Uint8Array;

  getPdf(source: string) {
    this.http
      .get(`http://localhost:4200/${source}`, {
        headers: {
          Accept: 'application/pdf',
        },
        responseType: 'arraybuffer',
      })
      .subscribe({
        next: (buffer: ArrayBuffer) => {
          this.currentSource = new Uint8Array(buffer);
        },
      });
  }
}
