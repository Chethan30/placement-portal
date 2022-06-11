import React, { useRef, useState } from "react";
import styles from "./AddJob.module.css";
import Wrapper from "../../../components/UI/Wrapper";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import {createJob} from "../../apihandler";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../../firebase";
// import AutoComplete from "@mui/lab/Autocomplete";
// import TextField from "@mui/material/TextField";

function AddJob() {
  const companyNameRef = useRef();
  const jobRoleRef = useRef();
  const jobTypeRef = useRef();
  const locationRef = useRef();
  const ctcRef = useRef();
  const dateRef = useRef();
  const jdRef = useRef();
  const jobDescRef = useRef();

  const [deptName, setDeptName] = useState([]);

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
    setDeptName(event.target.value);
  };

  const onFileUploadHandler = (event) => {
    console.log(event);
    event.preventDefault();
    const file = event.target[8].files[0];
    uploadFile(file, "jobDesc/jobid/${file.name}");
  };

  //const [jdUrl, setJDUrl] = useState("");

  const uploadFile = (file) => {
    if (!file) return "";
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
    //setIsLoading(true);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("Bytes transferred: ", prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          addJobHandler(downloadURL);
        });
      }
    );
  };

  const addJobHandler = (jdUrl) => {
    console.log(companyNameRef.current.value);
    console.log(jobRoleRef.current.value);
    console.log(jobTypeRef.current.value);
    console.log(locationRef.current.value);
    console.log(ctcRef.current.value);
    console.log(dateRef.current.value);
    console.log(jobDescRef.current.value);
    console.log(deptName);
    // console.log(timeRef.current.value);
    console.log(jdRef.current.value);


    let slab = 1;
    if (ctcRef.current.value < 600000){
      slab=1;
    }
    else if (ctcRef.current.value < 2000000){
      slab=2;
    }
    else{
      slab=3;
    }
    const data ={
      "job_type":jobTypeRef.current.value,
      "company_name":companyNameRef.current.value,
      "dept_allowed":deptName.toString(),
      "ctc":ctcRef.current.value,
      "comp_address": locationRef.current.value,
      "job_desc":jobDescRef.current.value,
      "placed_slab": slab,
      "start_date":"2022-12-01",
      "end_date":dateRef.current.value,
      //"extras":"5678",
      "job_role":jobRoleRef.current.value,
      "jd_link":jdUrl,
    }
    createJob(data);

    companyNameRef.current.value = "";
    jobRoleRef.current.value = "";
    jobTypeRef.current.value = "";
    locationRef.current.value = "";
    ctcRef.current.value = "";
    dateRef.current.value = "";
    jobDescRef.current.value = "";
    // timeRef.current.value = "";
    // deptRef.current.value = "";
    setDeptName([]);
    jdRef.current.value = "";
  };


  return (
    <Wrapper style={styles.bg}>
      <div className={styles.heading}>Add Job Form</div>
      <form onSubmit={onFileUploadHandler}>
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
          <option value="Internship">Internship</option>
          <option value="Full Time">Full Time</option>
        </select>
        <br />

        <label className={styles.inputlabel}>
          Job Description <span>*</span>
        </label>
        <br />
        <textarea
          ref={jobDescRef}
          className={styles.inputfield}
          placeholder="Job Desc"
          required
        />
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
        {/* <input
          ref={timeRef}
          className={` ${styles.datetime} ${styles.time}`}
          type="time"
          required
        /> */}
        <br />

        <label className={styles.inputlabel}>
          Departments Allowed <span>*</span>
        </label>
        <br />
        <Select
          className={styles.inputfield}
          multiple
          value={deptName}
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
        {/*<form onSubmit={onFileUploadHandler}>*/}
        <input ref={jdRef} className={styles.inputfield} type="file" required />
        {/*<button >UPLOAD</button>*/}
        {/*</form>*/}
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
