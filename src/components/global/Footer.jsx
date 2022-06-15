import { Container, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Container >
            <Typography variant="body2" align='center' paddingY={3}>Somodaro | Copyright @ {new Date().getFullYear()}</Typography>
        </Container>
    )
}

export default Footer