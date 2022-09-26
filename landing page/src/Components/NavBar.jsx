import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from "react-scroll";




export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed"
    sx={{
      backgroundColor: "White",
        color: "Black"
        }}
    >
      <Container maxWidth="full">
        <Toolbar disableGutters>
          <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Juan M.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Link activeClass='active' smooth spy to="Inicio">
                  <Typography textAlign="center">Inicio</Typography>
                  </Link>                 
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Link activeClass='active' smooth spy to="Perfil">
                  <Typography textAlign="center">Perfil</Typography>
                  </Link>                 
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Link activeClass='active' smooth spy to="Experiencia">
                  <Typography textAlign="center">Experiencia</Typography>
                  </Link>                 
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Link activeClass='active' smooth spy to="Portafolio">
                  <Typography textAlign="center">Inicio</Typography>
                  </Link>                 
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Link activeClass='active' smooth spy to="Contacto">
                  <Typography textAlign="center">Contacto</Typography>
                  </Link>                 
                </MenuItem>
            </Menu>
          </Box>
          <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PiedraCode
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link activeClass='active' smooth spy to="Inicio" >
                <Typography sx={{marginRight: 2, padding: 2, cursor: 'pointer'}}
                >Inicio</Typography>
              </Link>
              <Link activeClass='active' smooth spy to="Perfil" >
                <Typography sx={{marginRight: 2, padding: 2, cursor: 'pointer'}}
                >Perfil</Typography>
              </Link>
              <Link activeClass='active' smooth spy to="Estudios" >
                <Typography sx={{marginRight: 2, padding: 2, cursor: 'pointer'}}
                >Estudios</Typography>
              </Link>
              <Link activeClass='active' smooth spy to="Experiencia" >
                <Typography sx={{marginRight: 2, padding: 2, cursor: 'pointer'}}
                >Experiencia</Typography>
              </Link>
              <Link activeClass='active' smooth spy to="Portafolio" >
                <Typography sx={{marginRight: 2, padding: 2, cursor: 'pointer'}}
                >Portafolio</Typography>
              </Link>
              <Link activeClass='active' smooth spy to="Contacto" >
                <Typography sx={{marginRight: 2, padding: 2, cursor: 'pointer'}}
                >Contacto</Typography>
              </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://media-exp1.licdn.com/dms/image/C4D03AQHRJKifxfN4ow/profile-displayphoto-shrink_200_200/0/1623386834461?e=1669852800&v=beta&t=Hy3A9n-S3Ggf3IL6ScgnehRbSK1jdQxkgWc5RiWByyA" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
           
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <a href="https://github.com/monroypiedrahita">
                    GitHub
                    </a>
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <a href="https://www.linkedin.com/in/piedramonroy/">
                    LinkedIn
                    </a>
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <a href="https://wa.me/573176158612?text=Hola soy un desarrollador Font End">
                    WhatsApp
                    </a>
                    </Typography>
                </MenuItem>
             
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
