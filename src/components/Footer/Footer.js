import './Footer.css';
import { useDemoLanguage } from "../../i18n/DemoLanguage";
import React from 'react';
import { Link } from 'react-router-dom';
export const Footer = () => {
  const {
    tr
  } = useDemoLanguage();
  return <footer style={{
    background: '#e9e2d7',
    color: '#493e36',
    padding: '48px 6%',
    lineHeight: 1.8
  }}><h2 style={{
      fontFamily: 'Georgia, serif'
    }}>{tr("B.Cocoon Kids \xB7 Website concept")}</h2><p>{tr("Independent concept by TOIMU Technologies O\xDC. This is not the business's official shop.")}</p><nav aria-label={tr("Footer navigation")} style={{
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }}><Link to="/">{tr("Home")}</Link><Link to="/store">{tr("Collection")}</Link><Link to="/aboutus">{tr("About")}</Link><Link to="/cart">{tr("Basket")}</Link></nav><p>{tr("All shopping activity is a demonstration. No orders or payments are processed.")}</p></footer>;
};
