import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.zxing.barcode',
  appName: 'zxing-barcode-scanner',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
