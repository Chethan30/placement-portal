import classes from "./Profile.module.css";
const ProfileImage = (props) => {
  const imageAddress =
    "https://img.etimg.com/thumb/msid-90735631,width-300,imgsize-44652,,resizemode-4,quality-100/will-smith-banned-from-attending-oscars-for-10-years-after-slap.jpg";

  return (
    <div className={classes["profile-picture"]}>
      <img src={imageAddress} alt="Random Man" />
    </div>
  );
};

export default ProfileImage;
