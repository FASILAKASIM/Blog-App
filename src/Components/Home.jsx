import React from 'react' 
import { Typography, Table, TableContainer, TableCell, TableBody,TableRow,TableHead } from '@mui/material'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
const Home = () => {
  var[users,setUsers]=useState([])

  useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>{
    console.log(response.data)
    setUsers(response.data)
  })
  .catch((err)=>console.log(err))
  },[]);

  return (
    <div>
    <br /><br /><br /><Typography variant='h2'style={{color:'yellowgreen'}}> Blog Page</Typography>
    <br/>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>TITLE</TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
              {users.map((value,index)=>{
                return(
                  <TableRow key={index}>
                    <TableCell>
                      {value.id}
                    </TableCell>
                    <TableCell>
                      {value.title}
                    </TableCell>
                  </TableRow>
                )
               } )}
            </TableBody>
      </Table>
    </TableContainer>
    <br/>
    </div>
  )
}  

export default Home
