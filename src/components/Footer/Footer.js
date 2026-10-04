import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
export const Footer = () => <footer style={{background:'#e9e2d7',color:'#493e36',padding:'48px 6%',lineHeight:1.8}}><h2 style={{fontFamily:'Georgia, serif'}}>B.Cocoon Kids · Website concept</h2><p>Independent concept by TOIMU Technologies OÜ. This is not the business's official shop.</p><nav aria-label="Footer navigation" style={{display:'flex',gap:24,flexWrap:'wrap'}}><Link to="/">Home</Link><Link to="/store">Collection</Link><Link to="/aboutus">About</Link><Link to="/cart">Basket</Link></nav><p>All shopping activity is a demonstration. No orders or payments are processed.</p></footer>;
