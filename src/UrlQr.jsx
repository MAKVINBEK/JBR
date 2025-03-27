import React, { useState } from 'react';
import QrScanner from 'qr-scanner';

const QRCodeScanner = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const qrResult = await QrScanner.scanImage(file);
        setResult(qrResult);
        setError(null);
      } catch (err) {
        setError('Не удалось распознать QR-код');
        setResult(null);
      }
    }
  };

  return (
    <div style={{ paddingTop: '200px', fontFamily: 'Arial, sans-serif' }}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <div >
        {result && (
          <div>
            <p>Распознанный URL:</p>
            <a href={result} target="_blank" rel="noopener noreferrer">
              {result}
            </a>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!result && !error && <p>Выберите изображение с QR-кодом</p>}
      </div>
    </div>
  );
};

export default QRCodeScanner;
