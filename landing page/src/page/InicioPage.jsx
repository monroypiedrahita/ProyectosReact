import { Container } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";

export const InicioPage = () => {
  return (
    <Container
      sx={{
        paddingTop: 5,
        paddingBottom: 5,
        
        background: "linear-gradient(to right bottom, #002333, #FFF)",
      }}
      maxWidth="full"
    >
      <Grid container>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          item
          lg={6}
          xs={12}
        >
          <Typography
            variant="h1"
            sx={{
              frontFamily: "Roboto",
              fontWeight: "bold",
              color: "error.main",
              fontSize: 46,
            }}
          >
            ¡ Hola !  👋, Soy Miguel...
          </Typography>
          <Typography
            sx={{
              color: "tercero.main",
              fontWeight: "bold",
              fontSize: 30,
              textShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
              marginBottom: 5,  
            }}
          >
            Desarrollador FrontEnd
          </Typography>
          <Avatar
            alt="juanpiedrahita"
            sx={{
              width: 450,
              height: 450,
              boxShadow: "-20px -10px 10px rgba(0, 0, 0, 0.5)",
            }}
            xs={{
              width: 250,
              height: 250,
              boxShadow: "-20px -10px 10px rgba(0, 0, 0, 0.5)",
            }}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHRJKifxfN4ow/profile-displayphoto-shrink_800_800/0/1623386834461?e=1669248000&v=beta&t=HiDJcQUZ99FJNJfN6QEUIw3rSjYFkIqLIFbUvdRBP80"
          />
        </Grid>

        <Grid item lg={6} xs={12}>
          <Grid sx={{ textAlign: "center" }} item lg={12}>
            <Grid item lg={12}>
              <Grid container>
                <Typography
                  sx={{
                    color: "tercero.main",
                    fontWeight: "bold",
                    fontSize: 50,
                    textShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
                    width: "100%",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
                  Perfil Profesional
                </Typography>
                <Typography
                  sx={{
                    color: "primero.main",
                    fontSize: 35,
                    paddingX: "20px",
                    paddingY: "20px",
                  }}
                >
                  Soy desarrollador web con Liderazgo, trabajo en equipo,
                  solución de problemas en el siclo de desarrollo de software.
                  Tengo experiencia solida en el uso de herramientas para
                  programación en JavaScript, Python, HTML y Angular. También
                  poseo fortalezas en el campo administrativo con experiencia en
                  gestión administrativa, matemática, matemática económica,
                  producción documental, servicio al cliente, organización de
                  documentos administrativos, contabilidad y organización de
                  eventos
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
