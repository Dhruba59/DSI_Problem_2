import react from "react";
import css from "./item.module.css";
import imggg from '../img/a71.jpg';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Example = (props) => {

  const goto =() =>{
    window.open(props.weblink, '_blank');
  }

  return (
    <div className={css.Items}  >
      <Card>
        <CardImg onClick={goto} top height="20%" top width="10%" src={props.src} alt="src.name" />
        <CardBody>
          <CardTitle tag="h2">{props.name}</CardTitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted">Price: {props.price}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
