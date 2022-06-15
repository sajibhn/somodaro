import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Home = () => {
    return (
        <Container>
            <Box>
                <Typography variant="h5" align='center' sx={{ fontWeight: "300" }}>
                    "Without hard work, nothing grows but weeds"
                </Typography>
            </Box>
        </Container>
    )
}

export default Home