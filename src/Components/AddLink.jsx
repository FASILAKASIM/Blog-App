import React from 'react' 
import { Typography,TextField,Button } from '@mui/material'
const AddLink = () => {
  return (
    <div>
    <br /><br /><br /><Typography variant='h2'style={{color:'yellowgreen'}}> Blog Page</Typography>
    <TextField  id= "outlined-basic" label='BlogName' name="bname"  > </TextField> 
     <br/><br/><br/>
    <TextField  id= "outlined-basic" label='Description' name="description"  ></TextField>
     <br/><br/><br/>
     <TextField  id= "outlined-basic" label='AuthorName' name="aname"  ></TextField>
     <br/><br/><br/>
     <Button variant='contained' >Submit</Button>
    <br/>
    </div>
  )
  }

export default AddLink
