/* eslint-disable react/prop-types */
import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRcode = ({ text, size }) => {
  return <QRCodeCanvas level="H" size={size} value={text} />;
};

export default QRcode;
