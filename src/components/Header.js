import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import {Button , Stack , Toolbar} from '@mui/material';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
        <AppBar postition='static' >
            <Toolbar>
                <Typography variant='h6'
                sx={{flexgrow:1,textalign:"center"}}
                >
                    Restaurant page

                </Typography>
                <Stack direction='row' spacing={2}>
                  <Link to="/">
                <button >Home</button>
                </Link>
                <Link to="/menu">
                <button >Menu</button>
                </Link>
                <Link to="/table">
                <button >Table</button>
                </Link>
                </Stack>
            </Toolbar>
            </AppBar>
    </div>
  )
}

export default Header