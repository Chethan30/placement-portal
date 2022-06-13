import React, { useEffect, useState } from "react";
import Wrapper from "../../components/UI/Wrapper";
import styles from "./Forum.module.css";
import ForumCard from "../../components/ForumCard/ForumCard";
import { getBlogs } from "../apihandler";
import LoadingScreen from "../../components/LoadingPage/LoadingPage";

function Forum(prop) {
  const [blogList, setBlogList] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const getBlogHandler = async () => {
    try {
      setIsLoading(true);
      const response = await getBlogs();
      console.log(response);
      if (response.status === 200) {
        setBlogList(response.data.blogs);
        setIsLoading(false);
        return response;
      } else throw new Error("Error in loading profile!");
    } catch (error) {
      console.log("", error);
    }
  };

  useEffect(() => {
    getBlogHandler();
  }, []);

  let controlClasses = `${styles.bg} ${prop.style}`;

  return (
    <Wrapper style={controlClasses}>
      <div className={styles.heading}> Forum </div>
      {isloading && <LoadingScreen loadMessage="Loading..." />}
      {!isloading && (
        <div className={styles.layout}>
          {blogList.map((blog) => {
            return (
              <ForumCard
                key={Math.random()}
                content={blog.content}
                username={blog.username}
                title={blog.title}
                time={blog.time}
              />
            );
          })}
        </div>
      )}
    </Wrapper>
  );
}

export default Forum;
