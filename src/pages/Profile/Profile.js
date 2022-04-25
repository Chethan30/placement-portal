import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import ProfileImage from "./ProfileImage";
import GeneralDetails from "./Details/GeneralDetails";
import EducationDetails from "./Details/EducationDetails";
import classes from "./Profile.module.css";

function Profile() {
  return (
    <Wrapper>
      <div className={classes.personal}>
        <ProfileImage />
        <GeneralDetails />
        <div />
        <div />
      </div>
      <div className={classes.educational}>
        <EducationDetails />
      </div>
    </Wrapper>
  );
}

export default Profile;
