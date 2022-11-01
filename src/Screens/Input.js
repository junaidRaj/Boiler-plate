import { TextField } from '@mui/material';
import React from 'react'

export default function Input(props) {
    const {label, onChange, disabled, value, type, required}= props;
  return (
      <>
    <TextField fullWidth = {true} variant='standard' required={required} disabled={disabled} label={label} value={value} type={type} 
    onChange={onChange}
    />
      </>
      )
}
