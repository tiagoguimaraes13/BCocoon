import { useDemoLanguage } from "../../i18n/DemoLanguage";
import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../assets/logos/member.jpg';
export const AboutUs = () => {
  const {
    tr
  } = useDemoLanguage();
  return <section className="cocoon-about"><div><p className="cocoon-eyebrow">{tr("THE STORY / WEBSITE CONCEPT")}</p><h1>{tr("A thoughtful start")}<br />{tr("to a little life.")}</h1><p>{tr("This independent concept brings B.Cocoon's existing collection into a boutique digital experience, with gentle colours and room for every little detail.")}</p><p>{tr("Brand history, materials and maker information should be confirmed by the business before an official launch.")}</p><Link className="cocoon-button" to="/store">{tr("Explore the collection")}</Link></div><img src={photo} alt={tr("Photograph from the original B.Cocoon project")} loading="lazy" /></section>;
};
