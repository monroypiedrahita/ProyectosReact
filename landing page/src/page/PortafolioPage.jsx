import { Button, Grid, Paper, Typography, Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { proyectos } from "../database/proyectos";
import GitHubIcon from '@mui/icons-material/GitHub';




export const PortafolioPage = () => {
  return (
    <Container
      sx={{
        paddingTop: 10,
        paddingBottom: 5,
        borderRadius: 5,  
        boxShadow: "-20px -10px 10px rgba(0, 0, 0, 0.5)",
      }}
      maxWidth="full"
    >
      <Typography
        sx={{
          color: "primero.main",
          fontSize: 60,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Portafolio
      </Typography>
      {proyectos.map((proyecto) => (
        <Box key={proyecto.id} sx={{ width: "100%" }}>
          <Paper sx={{ margin: 4, padding: 4, borderRadius: 5 }} elevation={24}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item md={6} xs={12}>
                <img
                  className="ImgPortafolio"
                  src={proyecto.imagen}
                  alt={proyecto.nombre}
                  width={"100%"}
                />
              </Grid>
              <Grid sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                
              }} item md={6} xs={12}>
                <Typography
                sx={{
                  color: 'primero.main',
                  fontSize: 50,
                  fontWeight: 'bold',
                }}>{proyecto.nombre}
                </Typography>
                <Typography
                sx={{
                  color: "black",
                  fontSize: 30,
                }}>
                  {proyecto.Description}
                  </Typography>
                <Typography
                sx={{
                  color: 'primero.main',
                  fontSize: 35,
                  fontWeight: 'bold',
                  marginBottom: 2,
                  
                }}>{proyecto.Stack}</Typography>
                <Button sx={{
                  borderRadius: 5,
                  fontSize: 25,
                  width: 300,
                }}
                size="large"
                variant="contained"
                
                href={proyecto.Link_github}
                target="_blank"
                >
                CODIGO  <GitHubIcon sx={{
                  marginLeft: 1,
                }} /> 


                </Button>
                
              
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ))}
    </Container>
  );
};
