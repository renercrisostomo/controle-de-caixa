import React from 'react'
import { Grid, FormControl, FormLabel, TextField } from '@mui/material'

const InputForm = ({xs, isRequired = false, type, id, name, label, htmlFor, placeholder, size, isFullWidth, value, onChange}) => {
    return (
        <Grid item xs={xs}>
            <FormControl required={isRequired}>
                <FormLabel style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', letterSpacing: '0.01em', }} htmlFor={htmlFor}>{label}</FormLabel>
                <TextField fullWidth={isFullWidth} type={type} id={id} name={name} placeholder={placeholder} size={size} value={value} onChange={onChange} />
            </FormControl>
        </Grid>
    )
}

export default InputForm