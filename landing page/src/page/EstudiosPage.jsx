import { Container, Grid, Typography } from "@mui/material";
import React from "react";

export const EstudiosPage = () => {
  return (
    <Container
      sx={{
        backgroundColor: "primero.main",
        borderRadius: 5,
        textAlign: "center",
        paddingBottom: 10,
        paddingTop: 5,
      }}
      maxWidth="full"
    >
      <Grid container>
        {/* COLUMNA 1 */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
          item
          lg={6}
          xs={12}
        >
          <Grid item>
            <div>
              <img
                className="logoEstudios"
                src="https://www.utp.edu.co/assets/img/escudos/identificador60.png"
                alt="UTP"
              />
            </div>
            <div>
              <h1 className="certificado">Ingeniería Industrial</h1>
              <h2 className="ano">2017</h2>
            </div>
          </Grid>

          <Grid item>
            <div>
            <img
                className="logoEstudios"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1200px-Sena_Colombia_logo.svg.png"
                alt="SENA"
              />
            </div>
            <div>
              <h1 className="certificado">
                Tecnólogo en Gestión Administrativa
              </h1>
              <h2 className="ano">2011</h2>
            </div>
          </Grid>
        </Grid>
        {/* COLUMA 2 */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
          item
          lg={6}
          xs={12}
        >
          <Grid item>
            <Grid item>
              <div>
                <img
                  className="logoEstudios"
                  src="https://i1.wp.com/colombia.marialuisa.foundation/wp-content/uploads/sites/19/2020/11/favicon-fimlm.png?fit=512%2C512&ssl=1"
                  alt="FIMLM"
                />
              </div>
              <div>
                <h1 className="certificado">Diplomado en React</h1>
                <h2 className="ano">2022</h2>
              </div>
            </Grid>
            <Grid item>
              <div>
                <img
                  className="logoEstudios"
                  src="https://static.platzi.com/static/images/footer/logo.png"
                  alt="SENA"
                />
              </div>
              <div>
                <h1 className="certificado">Cursos en: </h1>
                <h2 className="ano">Programación Orientada a Objetos</h2>
                <h2 className="ano">Angular</h2>
                <h2 className="ano">Básico en JavaScript</h2>
                <h2 className="ano">EcmaScript</h2>
                <h2 className="ano">CSS - HTML</h2>
                <h2 className="ano">GitHub</h2>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
