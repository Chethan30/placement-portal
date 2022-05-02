import React, { useEffect, useState } from "react";
import Wrapper from "../../components/UI/Wrapper";
import ProfileImage from "./ProfileImage";
import { getProfileDetails } from "./apihandler";
import GeneralDetails from "./Details/GeneralDetails";
import EducationDetails from "./Details/EducationDetails";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import classes from "./Profile.module.css";

function Profile() {
  const [details, setDetails] = useState([]);
  const [isProfileLoading, setProfileLoading] = useState(false);

  let profileContent = (
    <div className={classes.personal}>
      <ProfileImage />
      <GeneralDetails GenDets={details} />
      <div />
      <div />
    </div>
  );

  let profileContent2 = (
    <div className={classes.educational}>
      <EducationDetails EduDets={details} />
    </div>
  );

  const getDetailsHandler = async () => {
    try {
      const response = await getProfileDetails();
      if (response.status === 200) {
        setProfileLoading(false);
        setDetails(response.data);
        return response;
      } else throw new Error("Error in loading profile!");
    } catch (error) {
      console.log("", error);
    }
  };

  useEffect(() => {
    setProfileLoading(true);
    getDetailsHandler();
  }, []);

  return (
    <Wrapper>
      {isProfileLoading && <LoadingPage loadMessage="Getting Profile..." />}
      {!isProfileLoading && profileContent}
      {!isProfileLoading && profileContent2}
    </Wrapper>
  );
}

export default Profile;
