import React from "react";
import classes from "../Profile.module.css";

function PlacementDetials(props) {
  const PlacedDets = props.PlacedDets;
  const slab1 = PlacedDets.slab1;
  const slab2 = PlacedDets.slab2;
  const slab3 = PlacedDets.slab3;
  console.log("PD", props);

  return (
    <div className={classes["placed-details"]}>
      <span className={classes.heading}> Placement Information </span>
      <div className={classes.detialsLayer}>
        <div className={`${classes.slab} ${classes.slab1}`}>
          {" "}
          <span>Slab 1</span>{" "}
        </div>
        <div className={classes.compName}> {slab1 ? slab1 : "- - -"} </div>
      </div>
      <div className={classes.detialsLayer}>
        <div className={`${classes.slab} ${classes.slab2}`}>
          {" "}
          <span>Slab 2</span>{" "}
        </div>
        <div className={classes.compName}> {slab2 ? slab2 : "- - -"} </div>
      </div>
      <div className={classes.detialsLayer}>
        <div className={`${classes.slab} ${classes.slab3}`}>
          {" "}
          <span>Slab 3</span>{" "}
        </div>
        <div className={classes.compName}> {slab3 ? slab3 : "- - -"} </div>
      </div>
    </div>
  );
}

export default PlacementDetials;
