import React from 'react';
import QRCodeGenerator from '../components/QRCodeGenerator';
import styles from "../styles/page.module.css";

const QRCodePage = () => {
  return (
    <div className={styles.qrcode}>
      <QRCodeGenerator value="https://localhost:3000"/>
    </div>
  )
};

export default QRCodePage;