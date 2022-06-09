import React, { useRef, useState } from "react";
import styles from "./AddJob.module.css";
import Wrapper from "../../../components/UI/Wrapper";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
// import AutoComplete from "@mui/lab/Autocomplete";
// import TextField from "@mui/material/TextField";

function AddJob() {
  const companyNameRef = useRef();
  const jobRoleRef = useRef();
  const jobTypeRef = useRef();
  const locationRef = useRef();
  const ctcRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const deptRef = useRef();
  const jdRef = useRef();

  const [personName, setPersonName] = useState([]);

  const deptNames = [
    "CSE",
    "ISE",
    "ECE",
    "EEE",
    "IEM",
    "ME",
    "AE",
    "CV",
    "CSD",
    "AI",
  ];

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const addJobHandler = (event) => {
    event.preventDefault();
    console.log(companyNameRef.current.value);
    console.log(jobRoleRef.current.value);
    console.log(jobTypeRef.current.value);
    console.log(locationRef.current.value);
    console.log(ctcRef.current.value);
    console.log(dateRef.current.value);
    console.log(timeRef.current.value);
    console.log(deptRef.current.value);
    console.log(jdRef.current.value);

    companyNameRef.current.value = "";
    jobRoleRef.current.value = "";
    jobTypeRef.current.value = "";
    locationRef.current.value = "";
    ctcRef.current.value = "";
    dateRef.current.value = "";
    timeRef.current.value = "";
    deptRef.current.value = "";
    jdRef.current.value = "";
  };

  return (
    <Wrapper style={styles.bg}>
      <div className={styles.heading}>Add Job Form</div>
      <form onSubmit={addJobHandler}>
        <label className={styles.inputlabel}>
          Company Name <span>*</span>
        </label>
        <br />
        <input
          ref={companyNameRef}
          className={styles.inputfield}
          type="text"
          placeholder="Ex: Amazon"
          required
        />
        <br />

        <label className={styles.inputlabel}>
          Job Role <span>*</span>
        </label>
        <br />
        <input
          ref={jobRoleRef}
          className={styles.inputfield}
          type="text"
          placeholder="Ex: SDE"
          required
        />
        <br />

        <label className={styles.inputlabel}>
          Job Type <span>*</span>
        </label>
        <br />
        <select
          ref={jobTypeRef}
          name=""
          id=""
          className={styles.inputfield}
          required
        >
          <option value=" ">Select</option>
          <option value="Innternship">Internship</option>
          <option value="Full Time">Full Time</option>
        </select>
        <br />

        <label className={styles.inputlabel}>
          Location <span>*</span>
        </label>
        <br />
        <input
          ref={locationRef}
          className={styles.inputfield}
          type="text"
          placeholder="Ex: Bengaluru"
          required
        />
        <br />

        <label className={styles.inputlabel}>
          CTC <span>*</span>
        </label>
        <br />
        <input
          ref={ctcRef}
          className={styles.inputfield}
          type="text"
          placeholder="10,00,000"
          required
        />
        <br />

        <label className={styles.inputlabel}>
          Apply By <span>*</span>
        </label>
        <br />
        <input ref={dateRef} className={styles.datetime} type="date" required />
        <input
          ref={timeRef}
          className={` ${styles.datetime} ${styles.time}`}
          type="time"
          required
        />
        <br />

        <label className={styles.inputlabel}>
          Departments Allowed <span>*</span>
        </label>
        <br />
        <Select
          className={styles.inputfield}
          ref={deptRef}
          multiple
          value={personName}
          variant="outlined"
          onChange={handleChange}
          input={<Input id="" />}
          renderValue={(selected) => (
            <div className={styles.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={styles.chip} />
              ))}
            </div>
          )}
        >
          {deptNames.map((deptName) => (
            <MenuItem key={deptName} value={deptName}>
              {deptName}
            </MenuItem>
          ))}
        </Select>
        <br />

        <label className={styles.inputlabel}>
          JD <span>*</span>
        </label>
        <br />
        <input ref={jdRef} className={styles.inputfield} type="file" required />
        <br />

        <button type="submit" className={styles.submitbutton}>
          {" "}
          Add Job{" "}
        </button>
      </form>
    </Wrapper>
  );
}

export default AddJob;
