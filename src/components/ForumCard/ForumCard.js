import React from "react";
import styles from "./ForumCard.module.css";

function ForumCard(props) {
  const content = props.content;
  const username = props.username;
  const time = props.time;
  const title = props.title;

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.title}> {title}</div>
        <br />
      </div>
      <div className={styles.user}>
        {username} <span className={styles.verticaldivider}> | </span>{" "}
        <span className={styles.time}> {time} </span>
      </div>
      <hr className={styles.divider} />
      <div className={styles.content}> {content} </div>
    </div>
  );
}

export default ForumCard;
