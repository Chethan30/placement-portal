import classes from "./Profile.module.css";
import ProfilePicture from "../../assets/ProfilePictureDefault.png";
const ProfileImage = (props) => {
  return (
    <div className={classes["profile-picture"]}>
      <img src={ProfilePicture} alt="Random Man" />
    </div>
  );
};

export default ProfileImage;
