import classes from "../Profile.module.css";
import {getProfileDetails} from "../../Profile/apihandler";
import {useEffect, useState} from "react";


function GeneralDetails() {
  const [GenDets, setGenDets] = useState([]);
  useEffect(() => {
    getProfileDetails() .then(function(response )
    {
        if (response.status === 200) {
          setGenDets(response.data);
          return response;
        } else alert("Error!");
      })
      .catch((error) => {
        console.log("", error);
      })
    },[]);

    return (

    <div className={classes["general-details"]}>
      <span className={classes.name}>{GenDets.first_name} {GenDets.last_name}</span>
      <span className={classes.usn}>{GenDets.username}</span>
      <span className={classes.email}>{GenDets.email_id}</span>
      <span className={classes.phone}>{GenDets.phone_number}</span>
    </div>
  );
}

export default GeneralDetails;