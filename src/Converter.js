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
      console.log(response);
      console.log(input);
      console.log(inputType);

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
      console.log("reset");

    } catch (err) {
      console.error(err.message);
    }
  }


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
          Reset
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
            <MenuItem value={"json"}>JSON</MenuItem>
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
      

    </div>
  )
}

export default Converter