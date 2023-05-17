import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import './Navbar.css'
import { Link } from 'react-router-dom';

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
                        <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>
                    </Box>
                    </Link>
                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" style={{color: "yellow"}}>
                            Criar Postagem
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" color="inherit">
                            postagens
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
                    <Link to='/login' className='text-decorator-none'>
                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box >
                    </Link>
                    </Box >
                

                </Toolbar >
            </AppBar >
        </>
    );
}


export default Navbar;
