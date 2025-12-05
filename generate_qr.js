const QRCode = require('qrcode');
const path = require('path');

const url = 'https://leonazareth.github.io/contacts/';
const outputPath = path.join(__dirname, 'qrcode.png');

console.log(`Generating QR Code for: ${url}`);

QRCode.toFile(outputPath, url, {
  color: {
    dark: '#006994',  // Ocean Blue (matches website theme)
    light: '#ffffff'
  },
  width: 1000,
  margin: 1
}, function (err) {
  if (err) {
      console.error('Error generating QR code:', err);
      process.exit(1);
  }
  console.log('QR code saved successfully to ' + outputPath);
});
