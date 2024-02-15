import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import Image from "next/image";

const QRCodeGenerator = ({ value }) => {
  const [src, setSrc] = useState('');
  useEffect(() => {
    generator()
  }, [])

  const generator = () => {
    QRCode.toDataURL(value).then(setSrc);
  }

  return (
    <div>
      <Image src={src} width={200} height={200}></Image>
    </div>
  )
}

export default QRCodeGenerator