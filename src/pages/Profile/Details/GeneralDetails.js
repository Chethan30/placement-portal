import classes from "../Profile.module.css";

function GeneralDetails(props) {
  const GenDets = props.GenDets;

  return (
    <div className={classes["general-details"]}>
      <span className={classes.name}>
        {GenDets.first_name} {GenDets.last_name}
      </span>
      <span className={classes.usn}>{GenDets.username}</span>
      <span className={classes.email}>{GenDets.email_id}</span>
      <span className={classes.phone}>{GenDets.phone_number}</span>
    </div>
  );
}

export default GeneralDetails;
