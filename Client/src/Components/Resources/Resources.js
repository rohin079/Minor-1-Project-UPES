import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

const styles = {
    centerContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to right, #3725A4 ,#1975b5)',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    
    //   height: '100vh'
    },
  };  

  const containerStyles = {
    backgroundImage: `url(https://i.pinimg.com/originals/48/bd/7c/48bd7c6e9b128643ba415cea5c6b3ede.gif)`, // Set the background image
    backgroundSize: 'cover',
    height: '100vh', // Adjust the height as needed
  };

export default function Resources(){
    return(
        <Box sx={{...containerStyles, '& button': { ml: 75 } }} >
        <br/> <br/>
        <ThemeProvider theme={theme}>
        <div style={styles.centerContent}>
        <Typography variant="h3">Please select your year</Typography>
      </div>        
      </ThemeProvider>
      <br /><br /><br />
        <Button variant="contained" size="large" color='secondary' >
          Year 1
        </Button>
        <br /><br /><br />
        <Button variant="contained" size="large" color='secondary' >
          Year 2
        </Button>
        <br /><br /><br />
        <Button variant="contained" size="large" color='secondary' >
          Year 3
        </Button>
        <br /><br /><br />
        <Button variant="contained" size="large" color='secondary' >
          Year 4
        </Button>
        </Box>
    )
}
