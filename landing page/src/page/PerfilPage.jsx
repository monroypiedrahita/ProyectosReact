import { Container } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export const PerfilPage = () => {
  return (
    <Container
      sx={{
        paddingTop: 5,
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
          <Typography
            sx={{
              padding: 5,
              fontSize: 30,
              backgroundColor: "primero.main",
              color: "error.main",
              borderRadius: "10px",
              boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
              height: "90%",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            eveniet minus. Unde inventore nesciunt numquam id illo eveniet
            possimus neque debitis! Error quidem laudantium velit nesciunt
            adipisci nam similique nobis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Labore, asperiores? At nostrum vero accusantium
            similique placeat ut, impedit praesentium eaque ea ipsum ipsa harum
            suscipit provident eveniet, atque commodi aliquam.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Soluta, eveniet minus. Unde
            inventore nesciunt numquam id illo eveniet possimus neque debitis!
            Error quidem laudantium velit nesciunt adipisci nam similique nobis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            asperiores? At nostrum vero accusantium similique placeat ut,
            impedit praesentium eaque ea ipsum ipsa harum suscipit provident
            eveniet, atque commodi aliquam.
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 5,
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
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 5,
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
              fontSize: 30,
              backgroundColor: "primero.main",
              color: "error.main",
              borderRadius: "10px",
              boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
              height: "90%",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            eveniet minus. Unde inventore nesciunt numquam id illo eveniet
            possimus neque debitis! Error quidem laudantium velit nesciunt
            adipisci nam similique nobis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Labore, asperiores? At nostrum vero accusantium
            similique placeat ut, impedit praesentium eaque ea ipsum ipsa harum
            suscipit provident eveniet, atque commodi aliquam.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Soluta, eveniet minus. Unde
            inventore nesciunt numquam id illo eveniet possimus neque debitis!
            Error quidem laudantium velit nesciunt adipisci nam similique nobis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            asperiores? At nostrum vero accusantium similique placeat ut,
            impedit praesentium eaque ea ipsum ipsa harum suscipit provident
            eveniet, atque commodi aliquam.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
