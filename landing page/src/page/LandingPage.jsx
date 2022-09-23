import { Box } from "@mui/system";
import React from "react";
import { ContactoPage } from "./ContactoPage";
import { EstudiosPage } from "./EstudiosPage";
import { ExperienciaPage } from "./ExperienciaPage";
import { InicioPage } from "./InicioPage";
import { PerfilPage } from "./PerfilPage";
import { PortafolioPage } from "./PortafolioPage";

export const LandingPage = () => {
  return (
    <Box>
      <Box id="inicio">
        <InicioPage />
      </Box>
      <Box id="perfil">
        <PerfilPage />
      </Box>
      <Box id="estudios">
        <EstudiosPage />
      </Box>
      <Box id="experiencia">
        <ExperienciaPage />
      </Box>
      <Box id="portafolio">
        <PortafolioPage />
      </Box>
      <Box id="contacto">
        <ContactoPage />
      </Box>
    </Box>
  );
};
