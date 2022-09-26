import { Grid, Typography } from '@mui/material'
import { Box, Container, flexbox } from '@mui/system'
import React from 'react'

export const Footer = () => {
  return (
    <Container 
    maxWidth="full"
    >
       <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        
       }}>
        <Typography sx={{
          href: "/",
          fontWeight: 'bold',
          fontSize: 30,
          color: "primero.main",
          mt: 2,
          mb: 2
        }}>Juan Miguel Piedrahita Monroy</Typography>
       </Box >
    </Container>
  )
}
