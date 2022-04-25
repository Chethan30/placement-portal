import classes from "../Profile.module.css";
import {useEffect, useState} from "react";
import {getProfileDetails} from "../apihandler";

function EducationDetails() {
  const [EduDets, setEduDets] = useState([]);
   const collegeName = "Dayananada Sagar College of Engineering";

  useEffect(() => {
    getProfileDetails() .then(function(response )
    {
        if (response.status === 200) {
          setEduDets(response.data);
          return response;
        } else alert("Error!");
      })
      .catch((error) => {
        console.log("", error);
      })
    },[]);

    return (

     <div className={classes.edudetails}>
      <span className={classes.heading}> Education Information </span>
      <span className={classes.subheading}>
        College : <span className={classes.data}>{collegeName}</span>
      </span>
      <span className={classes.subheading}>
        Department : <span className={classes.data}>{EduDets.dept}</span>
      </span>
      <span className={classes.subheading}>
        Semester : <span className={classes.data}>{EduDets.sem}</span>
      </span>
      <span className={classes.subheading}>
        Section : <span className={classes.data}>{EduDets.sec}</span>
      </span>
      <span className={classes.subheading}>
        CGPA : <span className={classes.data}>{EduDets.cgpa}</span>
      </span>
    </div>
  );
}

export default EducationDetails;
