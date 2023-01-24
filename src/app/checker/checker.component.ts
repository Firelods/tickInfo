import { HttpClient } from '@angular/common/http';
import { RequestService } from './../service/request.service';
import jwtDecode from 'jwt-decode';
import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { ScannerQRCodeConfig, ScannerQRCodeResult } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements OnInit {
  ngVersion = VERSION.full;
  public config: ScannerQRCodeConfig = {
    // fps: 1000,
    // isAuto: false,
    // isBeep: true,
    // decode: 'macintosh',
    medias: {
      audio: false,
      video: {
        width: window.innerWidth
      }
    }
  };

  request: boolean = true;
  qrResultString: string;

  constructor(private requestService: RequestService, private http: HttpClient) { }

  ngOnInit(): void {

  }
  public onEvent(e: ScannerQRCodeResult[]): void {
    if (e[0].typeName == 'ZBAR_QRCODE') {
      if (this.request) {
        this.request = false;
        this.http.post<{ message: string }>(this.requestService.url + 'api/student/useInvite', { "token": e[0].value }).subscribe((data: { message: string }) => {
          this.qrResultString = data.message;

        });
      }
      return;
    }
  }

  public handle(action: any, fn: string): void {
    action[fn]().subscribe(console.log, alert);
  }
}
