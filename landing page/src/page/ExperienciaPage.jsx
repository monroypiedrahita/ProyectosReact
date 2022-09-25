import { Container, Grid, Typography } from "@mui/material";
import React from "react";

export const ExperienciaPage = () => {
  return (
    <Container
      sx={{
        backgroundColor: "error.main",
        borderRadius: 5,
        textAlign: "center",
        paddingBottom: 10,
        paddingTop: 5,
        
      }}
      maxWidth="full"
    >
      <Grid container>
      <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            lg={12}
            xs={12}
          >
            <img
              className="logoEstudios"
              src="https://www.intersoftware.org.co/sites/default/files/logos_marcas_internas/logos-16.png"
              alt="SETI"
            />
            <Typography
              sx={{
                backgroundColor: "primero.main",
                color: "error.main",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                textAlign: "center",
                width: 500,
                fontSize: 30,
              }}
            >
              Desarrollador FrontEnd
            </Typography>
            <Typography
              sx={{
                width: 500,
                boxShadow: 10,
                fontSize: 20,
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
              }}
            >
             Julio/2022 - Actual
            </Typography>
          </Grid>

        <Grid container>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
           
            item
            lg={6}
            xs={12}
          >
            <img
              className="logoEstudios"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1200px-Sena_Colombia_logo.svg.png"
              alt="SENA"
            />
            <Typography
              sx={{
                backgroundColor: "primero.main",
                color: "error.main",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                textAlign: "center",
                width: 500,
                fontSize: 30,
              }}
            >
              Desarrollador FrontEnd
            </Typography>
            <Typography
              sx={{
                width: 500,
                boxShadow: 10,
                fontSize: 20,
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
              }}
            >
              Abil/2017, Febrero/2019 - Julio/2022
            </Typography>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            lg={6}
            xs={12}
          >
            <img
              className="logoEstudios"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1200px-Sena_Colombia_logo.svg.png"
              alt="SENA"
            />
            <Typography
              sx={{
                backgroundColor: "primero.main",
                color: "error.main",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                textAlign: "center",
                width: 500,
                fontSize: 30,
              }}
            >
              Relaciones Corporativas
            </Typography>
            <Typography
              sx={{
                width: 500,
                boxShadow: 10,
                fontSize: 20,
                borderBottomRightRadius: 15,
                borderBottomLeftRadius: 15,
              }}
            >
              Febrero/2018 - Diciembre/2018
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
