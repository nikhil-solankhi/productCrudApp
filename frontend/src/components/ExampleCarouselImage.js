// components/ExampleCarouselImage.js

import React from "react";
import PropTypes from "prop-types";

const imageStyle = {
  width: "100%",
  height: "500px",
  objectFit: "cover",
};
function ExampleCarouselImage({ src, text }) {
  return <img src={src} alt={text} style={imageStyle} />;
}

ExampleCarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
