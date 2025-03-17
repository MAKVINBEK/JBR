import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRGenerator = () => {
  const PageUrl = "https://jbr-sigma.vercel.app/qrCodePage"; 
  return (
    <div style={{ textAlign: "center", paddingTop: "200px" }}>
      <h2>Отсканируйте QR-код, чтобы получить подробную информацию</h2>
      <QRCodeCanvas value={PageUrl} size={256} />
      <p>Откройте камеру на телефоне и наведите на QR-код.</p>
    </div>
  );
};

export default QRGenerator;