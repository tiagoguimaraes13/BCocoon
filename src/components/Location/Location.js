import { useDemoLanguage } from "../../i18n/DemoLanguage";
import React from 'react';
import { Link } from 'react-router-dom';
export const Location = () => {
  const {
    tr
  } = useDemoLanguage();
  return <section className="cocoon-about"><div><p className="cocoon-eyebrow">{tr("VISIT / CONCEPT")}</p><h1>{tr("A little closer.")}</h1><p>{tr("An official shop could show confirmed store locations, collection arrangements and opening hours here. This concept does not publish verified visitor information.")}</p><Link className="cocoon-button" to="/store">{tr("Browse the collection")}</Link></div></section>;
};
