/* eslint-disable react/prop-types */
import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRcode = ({ text }) => {
  return <QRCodeCanvas level="H" size={400} value={text} />;
};

export default QRcode;
