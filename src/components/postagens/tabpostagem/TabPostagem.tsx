import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('Todas as Postagens')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="Todas as Postagens"/>
            <Tab label="Sobre-nós" value="Sobre Nós" />
          </Tabs>
        </AppBar>
        <TabPanel value="Todas as Postagens" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="Sobre Nós">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Minha Frase preferida "Se meus fracassos não ensinassem tanto, se minhas lágrimas não põem à prova, acho que o segredo de vencer na vida talvez é compreender sua dor de agora."</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;