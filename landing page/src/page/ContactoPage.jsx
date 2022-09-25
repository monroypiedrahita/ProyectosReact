import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const ContactoPage = () => {
  return (
    <Container
      sx={{
        backgroundColor: "primero.main",
        borderRadius: 5,
        textAlign: "center",
        paddingBottom: 10,
        paddingTop: 5,
        boxShadow: "-20px -10px 10px rgba(0, 0, 0, 0.5)",
      }}
      maxWidth="full"
    >
      <Typography
        sx={{
          color: "tercero.main",
          fontSize: 60,
          fontWeight: "bold",
        }}
      >
        Contacto
      </Typography>

      <Grid
        lg={{ textAlign: { xs: "center", md: "right" },

      }}
        item
        sx={6}
        xs={12}
      >
        <Button
          sx={{
            borderRadius: 4,
            backgroundColor: "white",
            color: "primero.main",
            marginX: 2,
            marginY: 2,
            
          }}
          size="large"
          variant="contained"
          target="_blank"
          href="https://github.com/monroypiedrahita"
        >
          <GitHubIcon
            sx={{
              marginRight: 1,
            }}
          />{" "}
          GitHub
        </Button>
        <Button
          sx={{
            borderRadius: 4,
            backgroundColor: "#0e76a8",
            color: "White",
            marginX: 2,
            marginY: 2,
          }}
          size="large"
          variant="contained"
          target="_blank"
          href="https://www.linkedin.com/in/piedramonroy/"
        >
          <LinkedInIcon
            sx={{
              marginRight: 1,
            }}
          />{" "}
          Linkedin
        </Button>
        <Button
          sx={{
            borderRadius: 4,
            backgroundColor: "#00bb2d",
            color: "White",
            marginX: 2,
            marginY: 2,
          }}
          size="large"
          variant="contained"
          target="_blank"
          href="https://wa.me/573176158612?text=Hola soy un desarrollador Font End"
        >
          <WhatsAppIcon
            sx={{
              marginRight: 1,
            }}
          />{" "}
          WhatsApp
        </Button>
      </Grid>
    </Container>
  );
};
