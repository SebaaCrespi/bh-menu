import React from 'react';
import QRCodeGenerator from '../components/QRCodeGenerator';
import styles from "../styles/page.module.css";

const QRCodePage = () => {
  return (
    <div className={styles.qrcode}>
      <QRCodeGenerator value="https://bh-menu.vercel.app"/>
    </div>
  )
};

export default QRCodePage;