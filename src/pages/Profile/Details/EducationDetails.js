import classes from "../Profile.module.css";

function EducationDetails(props) {
  const EduDets = props.EduDets;
  const collegeName = "Dayananda Sagar College of Engineering";
  console.log(EduDets);

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
