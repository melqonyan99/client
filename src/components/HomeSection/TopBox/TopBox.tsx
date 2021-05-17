import React from "react";
import ImageGallery from "react-image-gallery";
import "./top.scss";
import france from "../images/france.jpg";
import francet from "../images/francet.jpg";
import spain from "../images/spain.jpg";
import spaint from "../images/spaint.jpg";
import uk from "../images/uk.jpg";
import uk1 from "../images/uk1.jpg";
import china from "../images/china.jpg";
import china1 from "../images/china1.jpg";
import italy from "../images/italy.jpg";
import italy2 from "../images/italy2.jpg";
import italy3 from "../images/italy3.jpg";
import turkey from "../images/turkey.jpg";
import mexico from "../images/mexico.jpg";
import germany from "../images/germany.jpg";
import germany1 from "../images/germany1.jpg";
import thailand from "../images/thailand.jpg";
import usa1 from "../images/usa1.jpg";

const images = [
  {
    original: usa1,
    thumbnail: usa1,
  },
  {
    original: francet,
    thumbnail: francet,
  },
  {
    original: spaint,
    thumbnail: spaint,
  },
  {
    original: china1,
    thumbnail: china1,
  },
  {
    original: italy,
    thumbnail: italy,
  },
  {
    original: turkey,
    thumbnail: turkey,
  },
  {
    original: mexico,
    thumbnail: mexico,
  },
  {
    original: germany,
    thumbnail: germany,
  },
  {
    original: thailand,
    thumbnail: thailand,
  },
];

export default () => {
  return (
    <div className="top">
      <ImageGallery items={images} />
    </div>
  );
};
