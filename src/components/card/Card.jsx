import React from 'react';
import "./Card.css";
import Image from "../image/Image";
import CardTitle from '../card-title/CardTitle';
import CardBody from '../card-body/CardBody';

const Card = (props) => {

  console.log("props: " + props);
  console.log("props.data: " + props.data);
  console.log("props.data.imageData: " + props.data.imageData);

  return (
    <article className="card">
        <Image imageData = {props.data.imageData} />
        <CardTitle cardTitleData = {props.data.cardTitleData}  />
        <CardBody cardBodyData = {props.data.cardBodyData} />
    </article>
  )
}

export default Card