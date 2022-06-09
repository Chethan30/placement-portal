import React, { useRef } from "react";
import styles from "./AddJob.module.css";
import Wrapper from "../../../components/UI/Wrapper";
import AutoComplete from "@mui/lab/Autocomplete";
import TextField from "@mui/material/TextField";

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

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
  ];

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
        {/* <Chip
        label="CSE"
        clickable /> */}
        <AutoComplete
          multiple
          id="tags-standard"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Multiple values"
              placeholder="Favorites"
            />
          )}
        />
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
