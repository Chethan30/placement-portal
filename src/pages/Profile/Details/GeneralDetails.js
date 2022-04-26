import classes from "../Profile.module.css";
const GeneralDetails = (props) => {
  const name = "Will Smith";
  const usn = "1DS18CS001";
  const email = "slapchris@will.com";
  const phone = "+1 856 896 3256";

  return (
    <div className={classes["general-details"]}>
      <span className={classes.name}>{name}</span>
      <span className={classes.usn}>{usn}</span>
      <span className={classes.email}>{email}</span>
      <span className={classes.phone}>{phone}</span>
    </div>
  );
};

export default GeneralDetails;
