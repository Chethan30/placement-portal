import React, {useEffect, useState} from "react";
import Wrapper from "../../components/UI/Wrapper";
import styles from "./Forum.module.css";
import ForumCard from "../../components/ForumCard/ForumCard";
import {getBlogs} from "../apihandler";

function Forum() {
  const [blogList, setBlogList] = useState([]);

  const getBlogHandler = async () => {
    try {
      const response = await getBlogs();
      console.log(response)
      if (response.status === 200) {
        setBlogList(response.data.blogs);
        return response;
      } else throw new Error("Error in loading profile!");
    } catch (error) {
      console.log("", error);
    }
  };

   useEffect(() => {
    getBlogHandler();
  }, []);
  return (
    <Wrapper style={styles.bg}>
      <div className={styles.heading}> Forum </div>
      <div className={styles.layout}>

         {blogList.map((blog) => {
            return (
             <ForumCard
                content={blog.content}
                username={blog.username}
                title={blog.title}
                time={blog.time}
              />
            );
          })}

      </div>
    </Wrapper>
  );
}

export default Forum;
