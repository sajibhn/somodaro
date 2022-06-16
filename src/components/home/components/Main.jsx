import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Main = () => {

    return (
        <Container >
            <Box marginY={2}>
                <Box>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-simple-select-label">Choose</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state}
                            label="Focus"
                            onChange={handleState}
                        >
                            <MenuItem value="focus">Focus</MenuItem>
                            <MenuItem value="break">Break</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Typography variant='h5' align='center' >Study Physics</Typography>
                <Box display="flex" justifyContent="center" width="100%" marginY={5}>
                    <CountdownCircleTimer
                        isPlaying
                        duration={60}
                        initialRemainingTime={15}
                        colors="#12D1B9"
                        strokeLinecap='round'
                    />
                </Box>
                <Box display="flex" justifyContent="center" width="100%" marginX="auto" gap={2}>

                    {(state === 'focus') ? (
                        <>
                            <CustomTextField label="Add Time" variant="outlined" size='small' name='focus' onChange={handleChange} />
                            {/* <CustomTextField label="Add a Title" variant="outlined" size='small' name='title' onChange={handleChange} /> */}
                        </>
                    ) : (
                        <>
                            <CustomTextField label="Add Time" variant="outlined" size='small' name='break' onChange={handleChange} />
                        </>
                    )}
                </Box>
                <Box display="flex" justifyContent="center" width="100%" gap={2} marginY={3}>
                    <Button variant="contained" startIcon={<EventNoteIcon />}>Data</Button>
                    <Button variant="contained" startIcon={<AccessAlarmsIcon />}>Start</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Main

const CustomTextField = styled(TextField)`
 .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #12D1B9;
  }
  label.Mui-focused{color: #12D1B9}
`