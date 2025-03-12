import React, { useState, useEffect } from 'react';
import QrScanner from 'qr-scanner';
import qrImage from './img/qr.jpg';

export default function QRCodeScanner() {
  const [res, setRes] = useState(null)
  useEffect(() => {
    QrScanner.scanImage(qrImage)
      .then(setRes)
  }, []);
  return (
        <a href={res} target="_blank" rel="noopener noreferrer">{res}</a>
  );
}
