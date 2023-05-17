import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import Carrossel from '../../components/carrossel/Carrossel';

function Home() {
    return (
        <>
            {/*<Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "indigo" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Ao meu Blog!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "blueviolet", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://media4.giphy.com/media/lOaf0LBA2mluwm8cY8/giphy.gif" alt="" width="400px" height="400px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>*/}


            <Grid container style={{ marginTop: "8px" }}>
                <Grid item xs={12}>
                    <Carrossel />
                </Grid>
            </Grid>
        </>

    );
}

export default Home;