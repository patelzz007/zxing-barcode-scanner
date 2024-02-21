import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  @ViewChild(ZXingScannerComponent) scanner!: ZXingScannerComponent;

  public allowedFormats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX /*, ...*/,
  ];

  public availableDevices: MediaDeviceInfo[] = [];
  public currentDevice!: MediaDeviceInfo;

  public formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  public hasDevices: boolean = false;
  public hasPermission: boolean = false;

  public qrResultString: string | null = null;

  public torchEnabled = false;
  public torchAvailable$ = new BehaviorSubject<boolean>(false);
  public tryHarder = false;

  constructor() {}

  ngOnInit(): void {
    console.log('allowedFormats', this.allowedFormats);
  }

  public clearResult(): void {
    this.qrResultString = null;
  }

  public onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  public onCodeResult(resultString: string) {
    console.log('onCodeResult', resultString);
    this.qrResultString = resultString;
    if (this.qrResultString) this.scanner.scanStop();
  }

  public rescan() {
    this.qrResultString = null;
    this.scanner.scanStart();
  }

  public onHasPermission(has: boolean) {
    this.hasPermission = has;
  }
}
