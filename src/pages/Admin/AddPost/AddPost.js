import React, { useRef, useState } from "react";
import styles from "./AddPost.module.css";
import Wrapper from "../../../components/UI/Wrapper";

function AddPost() {
  const [showAddPost, setShowAddPost] = useState(false);
  const postTitle = useRef();
  const postContent = useRef();

  const addPostHandler = () => {
    showAddPost(false);
  };

  const showAddPostHandler = () => {
    setShowAddPost(true);
  };
  const onCancelPostHandler = () => {
    setShowAddPost(false);
  };

  let formContent = (
    <React.Fragment>
      <div className={styles.heading}>Add Job Form</div>
      <form onSubmit={addPostHandler}>
        <label className={styles.inputlabel} id="addtitle">
          Title <span>*</span>
        </label>
        <br />
        <input
          ref={postTitle}
          className={styles.inputfield}
          type="text"
          placeholder="Ex: New Job Alert"
          required
        />
        <br />

        <label className={styles.inputlabel} id="addcontent">
          Content <span>*</span>
        </label>
        <br />
        <textarea
          ref={postContent}
          className={styles.inputfield}
          type="text"
          placeholder="Ex: Apply without Fail"
          required
        />
        <br />

        <button type="submit" className={styles.submitbutton}>
          {" "}
          Post{" "}
        </button>
        <button
          type="button"
          className={`${styles.submitbutton} ${styles.cancelButton}`}
          onClick={onCancelPostHandler}
        >
          Cancel
        </button>
      </form>
      <hr />
    </React.Fragment>
  );

  return (
    <Wrapper style={styles.bg}>
      {!showAddPost && (
        <div className={styles.container}>
          <button
            className={`${styles.submitbutton} ${styles.addPost}`}
            onClick={showAddPostHandler}
          >
            {" "}
            Add Post{" "}
          </button>
        </div>
      )}
      {showAddPost && formContent}
    </Wrapper>
  );
}

export default AddPost;
