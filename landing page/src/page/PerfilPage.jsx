import { Container } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export const PerfilPage = () => {
  return (
    <Container
      sx={{
        paddingTop: 10,
        paddingBottom: 5,
        borderRadius: 5,
        textAlign: "center",
        boxShadow: "-20px -10px 10px rgba(0, 0, 0, 0.5)",
      }}
      maxWidth="full"
    >
      <Typography
        sx={{
          color: "primero.main",
          fontSize: 60,
          fontWeight: "bold",
        }}
      >
        Perfil
      </Typography>
      <Grid container>
        <Grid
          sx={{
            textAlign: "center",
          }}
          item
          lg={4}
          xs={12}
        >
          <Typography
            sx={{
              color: "segundo.main",
              fontWeight: "bold",
              fontSize: 50,
              width: "100%",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            Habilidades Técnicas
          </Typography>
          <Grid container>
            <Typography
              sx={{
                padding: 10,
                fontSize: 30,
                backgroundColor: "primero.main",
                color: "error.main",
                borderRadius: "10px",
                boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
                height: 800,
                
              }}
            >
              Tengo experiencia solida en el uso de herramientas para programación en JavaScript, Python, HTML y Angular. También poseo fortalezas en el campo administrativo con experiencia en gestión administrativa, matemática, matemática económica, producción documental, servicio al cliente, organización de documentos administrativos, contabilidad y organización de eventos
            </Typography>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,
            height: 800,
            
          }}
          item
          lg={2}
          xs={6}
        >
          <img className="ImgLenguajes"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
            alt="HTML"
          />
          <img className="ImgLenguajes"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/250px-CSS3_logo_and_wordmark.svg.png"
            alt="CSS"
          />
          <img className="ImgLenguajes"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
            alt="JavaScript"
          />
          <img className="ImgLenguajes"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            alt="TypeScript"
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,
          
            
          }}
          item
          lg={2}
          xs={6}
        >
          <img className="ImgLenguajes"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
            alt="Angular"
          />
          <img className="ImgLenguajes"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png"
            alt="React"
          />
          <img className="ImgLenguajes" 
            src="https://mui.com/static/logo.png" 
            alt="MUI" />
          <img className="ImgLenguajes"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
            alt="Bootstrap"
          />
        </Grid>
        <Grid
          sx={{
            textAlign: "center",
            justifyContent: "center",
          }}
          item
          lg={4}
          xs={12}
        >
          <Typography
            sx={{
              color: "segundo.main",
                    fontWeight: "bold",
                    fontSize: 50,
                    width: "100%",
                    marginBottom: "10px",
                    marginTop: "10px",
            }}
          >
            Habilidades Blandas
          </Typography>
          <Typography
            sx={{
              padding: 5,
   
              backgroundColor: "primero.main",
              color: "error.main",
              borderRadius: "10px",
              boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
             height: 800,
            }}
          >
            <Grid sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "100%",
            }} container>
              <Typography sx={{fontSize: 30 }} >Trabajo en equipo</Typography>
              <Typography sx={{fontSize: 30 }} >Liderazgo</Typography>
              <Typography sx={{fontSize: 30 }} >Inteligencia Emocional</Typography>
              <Typography sx={{fontSize: 30 }} >Solución de conflictos</Typography>
              <Typography sx={{fontSize: 30 }} >Flexibilidad</Typography>
              <Typography sx={{fontSize: 30 }} >Gestion de tiempo</Typography>
            </Grid>
            
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
