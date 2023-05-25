import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import './Navbar.css'
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { addToken } from '../../../store/token/Actions';

function Navbar() {
    //const [token, setToken] = useLocalStorage('token');

    const dispatch = useDispatch()
    const token = useSelector <UserState, UserState["tokens"]>((state) => state.tokens)
    
    let navigate = useNavigate();
    
    function goLogout(){
        dispatch(addToken(''))
        alert("Usuário deslogado")
       navigate('/login')
    }

    var navbarComponent;
    
    if(token !== ''){
        navbarComponent =
    
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
                    {/*<Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" style={{color: "yellow"}}>
                            Criar Postagem
                        </Typography>
                    </Box>*/}
                    <Link to="/postagens" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        </Link>
                        <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                    
                    </Box >
                

                </Toolbar >
            </AppBar >
        }

            return (
        <>
        {navbarComponent}
        </>
    );
}



export default Navbar;
