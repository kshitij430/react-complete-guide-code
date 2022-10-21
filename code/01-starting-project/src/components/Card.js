import styles from "./Card.module.css";
import React from "react";
const Card = function (props) {
  console.log(props);
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
