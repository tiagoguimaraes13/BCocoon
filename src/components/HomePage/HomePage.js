import { useDemoLanguage } from "../../i18n/DemoLanguage";
import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/Bbloomers/bk3.png';
import doudou from '../../assets/Doudou/dd1.jpg';
import shoes from '../../assets/Bshoes/bs1.jpg';
const products = [{
  name: 'Baby Bloomers',
  image: hero
}, {
  name: 'Baby Animal Doudou',
  image: doudou
}, {
  name: 'Baby Shoes',
  image: shoes
}];
export function HomePage() {
  const {
    tr
  } = useDemoLanguage();
  return <div className="cocoon-home">
    <div className="cocoon-concept">{tr("Independent website concept by TOIMU \xB7 This demo does not accept orders.")}</div>
    <section className="cocoon-hero"><div><p className="cocoon-eyebrow">{tr("B.COCOON KIDS / THE LITTLE THINGS")}</p><h1>{tr("Little pieces.")}<br />{tr("Lovely beginnings.")}</h1><p>{tr("A softer world of baby clothing, keepsakes and thoughtful gifts.")}</p><Link className="cocoon-button" to="/store">{tr("Explore the collection \u2197")}</Link><span className="cocoon-caption">{tr("A boutique shopping experience, reimagined.")}</span></div><img src={hero} alt={tr("Baby bloomers in a woven basket")} fetchPriority="high" /></section>
    <section className="cocoon-collection"><div className="cocoon-heading"><div><p className="cocoon-eyebrow">{tr("THE COLLECTION")}</p><h2>{tr("Small things to treasure.")}</h2></div><Link to="/store">{tr("View all pieces \u2192")}</Link></div><div className="cocoon-grid">{products.map(product => {
          return <Link to="/store" className="cocoon-product" key={product.name}><img src={product.image} alt={product.name} loading="lazy" /><h3>{tr(product.name)}</h3><span>{tr("Discover colours & options \u2192")}</span></Link>;
        })}</div></section>
    <section className="cocoon-story"><p className="cocoon-eyebrow">{tr("A LITTLE MORE THOUGHTFUL")}</p><h2>{tr("For first moments.")}<br />{tr("And lasting memories.")}</h2><p>{tr("Explore the story behind the collection and find a little inspiration for your next gift.")}</p><Link to="/aboutus">{tr("Discover B.Cocoon \u2192")}</Link></section>
  </div>;
}
