import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkUser, getData, sendData } from "../config/firebaseMethod";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import MaterialUIPickers from './date';
import SMSelect from "./Dropdown";
import Input from "./Input";

export default function Home() {
  const navigate = useNavigate();
  const [txt, setTxt] = useState("");
  const [userId, setUserId] = useState("");
  const params = useParams();
  const [model, setModel] = useState({});

  const addTodo = () => {
    console.log(model);
    sendData(model, `student/`)
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // let getTodoData = () => {
  //   getData(`todos/${userId}`)
  //     .then((success) => {
  //       console.log(success);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  let fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
    console.log(model);
  };

  useEffect(() => {
    checkUser()
      .then((res) => {
        console.log(res);
        if (params.id == res) {
          setUserId(res);
          // getTodoData();
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log("No data");
      });
  }, []);

  return (
    <>
      <h1>home</h1>
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Input
            required={true}
              label="First Name"
              value={model.firstName}
              onChange={(e) => fillModel("firstName", e.target.value)}
            />
          </Grid>
          <Grid item md={4}>
            <Input
            required={true}
              label="last Name"
              value={model.lastName}
              onChange={(e) => fillModel("lastName", e.target.value)}
            />
          </Grid>
          <Grid item md={4}>
            <SMSelect
              required={true}
              label="Course"
              onChange={(e) => fillModel("course", e.target.value)}
              datasource={[
                {
                  id: "wm",
                  Name: "Web And Mobile",
                },
                {
                  id: "gd",
                  Name: "graphic Design",
                },
                {
                  id: "fl",
                  Name: "Flutter",
                },
              ]}
            />
          </Grid>
          <Grid item md={4}>
            <SMSelect
            required={true}
              label="Section"
              onChange={(e) => fillModel("Section", e.target.value)}
              datasource={[
                {
                  id: "a",
                  Name: "A",
                },
                {
                  id: "b",
                  Name: "B",
                },
                {
                  id: "c",
                  Name: "C",
                },
              ]}
            />
          </Grid>
          <Grid item md={4}>
            <Input
            required={true}
              label="Contact"
              value={model.Contact}
              onChange={(e) => fillModel("Contact", e.target.value)}
            />
          </Grid>
          <Grid item md={4}>
            <Input
            required={true}
              label="CNIC"
              value={model.CNIC}
              onChange={(e) => fillModel("CNIC", e.target.value)}
            />
          </Grid>
          <Grid item md={4}>
            <Input
            required={true}
              label="Father Name"
              value={model.FatherName}
              onChange={(e) => fillModel("FatherName", e.target.value)}
            />
          </Grid>
          <Grid item md={4}>
            <Input
            required={true}
              label="Father CNIC"
              value={model.FatherCNIC}
              onChange={(e) => fillModel("FatherCNIC", e.target.value)}
            />
          </Grid>
          <Grid item md={4}>
            <Input
            required={true}
              label="Father Contact"
              value={model.FatherContact}
              onChange={(e) => fillModel("FatherContact", e.target.value)}
            />
          </Grid>
          <Grid item md={4}>
            <Input
            required={true}
              label="Emergency Contact"
              value={model.EmergencyContact}
              onChange={(e) => fillModel("EmergencyContact", e.target.value)}
            />
          </Grid>
          <Grid item md={4}>
            <Input type='date'
            required={true}
             value={model.Date}
             onChange={(e) => fillModel("Date", e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
      <Button variant="contained" onClick={addTodo}>
       Submit
      </Button>
    </>
  );
}
