import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import styles from "./Forum.module.css";
import ForumCard from "../../components/ForumCard/ForumCard";

function Forum() {
  const content = "Some random content here";
  const username = "Admin";
  const time = "Time";
  const title = "Tilte Goes Here";

  return (
    <Wrapper style={styles.bg}>
      <div className={styles.heading}> Forum </div>
      <div className={styles.layout}>
        <ForumCard
          content={content}
          username={username}
          title={title}
          time={time}
        />
        <ForumCard
          content={content}
          username={username}
          title={title}
          time={time}
        />
        <ForumCard
          content={content}
          username={username}
          title={title}
          time={time}
        />
      </div>
    </Wrapper>
  );
}

export default Forum;
