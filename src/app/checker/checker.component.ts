import { HttpClient } from '@angular/common/http';
import { RequestService } from './../service/request.service';
import jwtDecode from 'jwt-decode';
import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements OnInit {
  ngVersion = VERSION.full;

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  qrResult: any;
  request: boolean = true;
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;

  constructor(private requestService: RequestService, private http: HttpClient) { }

  ngOnInit(): void {

  }
  handleQrCodeResult(resultString: string) {
    if (this.request) {
      this.http.post<{ message: string }>(this.requestService.url + 'api/student/useInvite', { "token": resultString }).subscribe((data: { message: string }) => {
        this.qrResultString = data.message;
        this.request = false;
      });
    }
    return;
  }
}
