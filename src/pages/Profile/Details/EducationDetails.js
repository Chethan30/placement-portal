import classes from "../Profile.module.css";
const EducationDetails = (props) => {
  const collegeName = "Dayananada Sagar College of Engineering";
  const department = "Computer Science and Engineering";
  const semester = "7";
  const section = "A";
  const cgpa = "9.7";

  return (
    <div className={classes.edudetails}>
      <span className={classes.heading}> Education Information </span>
      <span className={classes.subheading}>
        College : <span className={classes.data}>{collegeName}</span>
      </span>
      <span className={classes.subheading}>
        Department : <span className={classes.data}>{department}</span>
      </span>
      <span className={classes.subheading}>
        Semester : <span className={classes.data}>{semester}</span>
      </span>
      <span className={classes.subheading}>
        Section : <span className={classes.data}>{section}</span>
      </span>
      <span className={classes.subheading}>
        CGPA : <span className={classes.data}>{cgpa}</span>
      </span>
    </div>
  );
};

export default EducationDetails;
