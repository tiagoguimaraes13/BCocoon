import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import hero from '../../assets/Bbloomers/bk3.png';
import doudou from '../../assets/Doudou/dd1.jpg';
import shoes from '../../assets/Bshoes/bs1.jpg';
const products = [{name:'Baby Bloomers', image:hero}, {name:'Baby Animal Doudou', image:doudou}, {name:'Baby Shoes', image:shoes}];
export function HomePage() {
  return <div className="cocoon-home">
    <div className="cocoon-concept">Independent website concept by TOIMU · This demo does not accept orders.</div>
    <section className="cocoon-hero"><div><p className="cocoon-eyebrow">B.COCOON KIDS / THE LITTLE THINGS</p><h1>Little pieces.<br />Lovely beginnings.</h1><p>A softer world of baby clothing, keepsakes and thoughtful gifts.</p><Link className="cocoon-button" to="/store">Explore the collection ↗</Link><span className="cocoon-caption">A boutique shopping experience, reimagined.</span></div><img src={hero} alt="Baby bloomers in a woven basket" fetchPriority="high" /></section>
    <section className="cocoon-collection"><div className="cocoon-heading"><div><p className="cocoon-eyebrow">THE COLLECTION</p><h2>Small things to treasure.</h2></div><Link to="/store">View all pieces →</Link></div><div className="cocoon-grid">{products.map(product => <Link to="/store" className="cocoon-product" key={product.name}><img src={product.image} alt={product.name} loading="lazy" /><h3>{product.name}</h3><span>Discover colours & options →</span></Link>)}</div></section>
    <section className="cocoon-story"><p className="cocoon-eyebrow">A LITTLE MORE THOUGHTFUL</p><h2>For first moments.<br />And lasting memories.</h2><p>Explore the story behind the collection and find a little inspiration for your next gift.</p><Link to="/aboutus">Discover B.Cocoon →</Link></section>
  </div>;
}
