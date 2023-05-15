import React from 'react';
import "./Image.css";

const Image = (props) => {
  return <img className="image" src={props.imageData} loading="lazy" width="600" height="400" />;
}

export default Image