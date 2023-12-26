import React, { useEffect, useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, AppBar, IconButton } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import Icon from '@mui/material/Icon';
import MenuIcon from '@mui/icons-material/Menu';

// import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import './style/Global.scss'

function Converter() {

  const [inputType, setInputType] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [conn, setConn] = useState();


  const handleSelect = (event) => {
    setInputType(event.target.value);
  }

  const config = {
    headers: {
      'Content-Type': 'text/plain'
    },
    responseType: 'text'
  };

  const axiosTest = async e => {
    e.preventDefault();
    try {

      const response = await axios.get(`http://localhost:8080/api/${inputType}`, config);
      // console.log(response);
      // console.log(input);
      // console.log(inputType);
      if (response.status == 200) {
        setConn(200);
      }
    } catch (err) {

      console.error(err.message);

    }
  }

  const convert = async e => {
    e.preventDefault();
    try {
      const body = input;
      const response = await axios.post(`http://localhost:8080/api/${inputType}`, body, config);
      
      console.log(response.data);
      setOutput(response.data);
      
    } catch (err) {
      console.error(err.message);
    }

  }

  const resetForm = async e => {
    e.preventDefault();
    try {
      setInputType("");
      setInput("");
      setOutput("");
      setConn();
      // console.log("reset");

    } catch (err) {
      console.error(err.message);
    }
  }

  const supported = (
    <div>
      <Typography sx={{ textAlign: 'left'}}>The HL7 converter supports the following message types/events:</Typography>
      <Typography sx={{ textAlign: 'left' }}>ADT_A01 - Patient Administration: Admit/Visit Notification</Typography>
      <Typography sx={{ textAlign: 'left' }}>ADT_A03 - Patient Administration: Discharge/End Visit</Typography>
      <Typography sx={{ textAlign: 'left' }}>ADT_A04 - Patient Administration: Register a Patient</Typography>
      <Typography sx={{ textAlign: 'left' }}>ADT_A08 - Patient Administration: Update Patient Information</Typography>
      <Typography sx={{ textAlign: 'left' }}>ADT_A28 - Patient Administration: Add Person or Patient Information</Typography>
      <Typography sx={{ textAlign: 'left' }}>ADT_A31 - Patient Administration: Update Person Information</Typography>
      <Typography sx={{ textAlign: 'left' }}>ADT_A34 - Patient Administration: Merge Patient Information - Patient ID Only</Typography>
      <Typography sx={{ textAlign: 'left' }}>ADT_A40 - Patient Administration: Merge Patient - Patient Identifier List</Typography>
      <Typography sx={{ textAlign: 'left' }}>DFT_P03 - Post Detail Financial Transaction (does not convert FT1)</Typography>
      <Typography sx={{ textAlign: 'left' }}>MDM_T02 - Original Document Notifcication and Content</Typography>
      <Typography sx={{ textAlign: 'left' }}>MDM_T06 - Document Addendum Notification and Content</Typography>
      <Typography sx={{ textAlign: 'left' }}>OMP_O09 - Pharmacy/Treatment Order</Typography>
      <Typography sx={{ textAlign: 'left' }}>ORM_O01 - General Order Message</Typography>
      <Typography sx={{ textAlign: 'left' }}>ORU_R01 - Observation Reporting: Observation and Result Transmission (Laboratory)</Typography>
      <Typography sx={{ textAlign: 'left' }}>PPR_PC1 - Patient Problem: Add Problem</Typography>
      <Typography sx={{ textAlign: 'left' }}>RDE_O11 - Pharmacy/Treatment Encoded Order</Typography>
      <Typography sx={{ textAlign: 'left' }}>RDE_O25 - Pharmacy/Treatment Refill Authorization Request</Typography>
      <Typography sx={{ textAlign: 'left' }}>VXU_V04 - Vaccination: Update Vaccination Record</Typography>
    </div>
  );
  
  
  return (
    <div>
      <AppBar color="grey" position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign="left">
            Converter
          </Typography>
          <Button 
          className='btn'
          color='success'
          variant="contained"
          sx={{ marginLeft: '5px' }}
          onClick={(e) => {
            convert(e);
          }}
        >
          Convert
        </Button>
        <Button 
          className='btn'
          color='primary'
          variant="contained"
          sx={{ marginLeft: '5px' }}
          onClick={(e) => {
            resetForm(e);
          }}
        >
          Clear Form
        </Button>
        <Button 
          className='btn'
          color={conn != 200 ? 'warning' : 'success'}
          variant={conn != 200 ? 'contained' : 'outlined'}
          sx={{ marginLeft: '5px' }}
          onClick={(e) => {
            axiosTest(e);
          }}
        >
          {conn != 200 ? "Test " : "GTG!"}
        </Button>
        </Toolbar>
      </AppBar>
      <header>
        <h2>
        Converter
        </h2>
        <div>
        
        </div>
      </header>
      
      <div
        className='form'
      >
        <FormControl
          sx={{ width: '90%' }}
        >
          <InputLabel>Input Type</InputLabel>
          <Select
            value={inputType}
            label="Input Type"
            onChange={handleSelect}
          >
            <MenuItem value={"edi"}>X12 - EDI</MenuItem>
            {/* <MenuItem value={"json"}>JSON</MenuItem> */}
            <MenuItem value={"hl7"}>HL7v2</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="form">
        <TextField
          id="outlined-multiline-static"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label={"Input " + inputType.toUpperCase()}
          multiline
          minRows={5}
          sx={{ width: '90%' }}
        />
      </div>
    
      <div
        className='form'
      >
      <TextField
        id="outlined-multiline-static"
        value={output}
        label={"Output " + inputType.toUpperCase()}
        multiline
        minRows={5}
        sx={{ width: '90%' }}
      />
      </div>

      {/* JF - TODO: Need to clean this up somehow or possibly make into a modal?
      <div>
          {supported}
      </div> */}
      

    </div>
  )
}

export default Converter