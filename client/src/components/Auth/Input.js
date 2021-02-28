import React from 'react'
import { InputAdornment, Grid, TextField, IconButton } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({ name, handleChange, label, autoFocus, type, half, handleShowPassword }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField 
                name={name}
                label={label}
                onChange={handleChange}
                variant='outlined'
                required
                fullWidth
                autoFocus={autoFocus}
                type={type}
                inputProps={name === 'password' && {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    ),
                 }  }
            />
        </Grid>
    )
}

export default Input
