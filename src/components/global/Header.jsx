import React from 'react'
import { Container, Typography, Switch, Box } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Header = ({ mode, setMode }) => {
    return (
        <Container>
            <Box display="flex" justifyContent="space-between" alignItems="center" paddingY={4}>
                <Typography variant='h4'>Somodaro</Typography>
                <Box display="flex" alignItems="center">
                    <Brightness4Icon />
                    <Switch onChange={(e) => setMode(mode === "light" ? 'dark' : 'light')} />
                </Box>
            </Box>
        </Container>
    )
}

export default Header