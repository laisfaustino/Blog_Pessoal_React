import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import './Navbar.css'

function Navbar() {

    return (
        <>
            <AppBar id="bar" position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }}>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }} />
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" color="inherit">
                            postagem
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" color="inherit">
                            temas
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" color="inherit">
                            cadastar temas
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box >

                </Toolbar >
            </AppBar >
        </>
    );
}


export default Navbar;
