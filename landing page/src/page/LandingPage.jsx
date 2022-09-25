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
      <Box id="Inicio">
        <InicioPage />
      </Box>
      <Box id="Perfil">
        <PerfilPage />
      </Box>
      <Box id="Estudios">
        <EstudiosPage />
      </Box>
      <Box id="Experiencia">
        <ExperienciaPage />
      </Box>
      <Box id="Portafolio">
        <PortafolioPage />
      </Box>
      <Box id="Contacto">
        <ContactoPage />
      </Box>
    </Box>
  );
};
