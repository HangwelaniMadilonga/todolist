import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const myTheme = createTheme({
  palette: {
    primary: {
      
      main: '#4bd5e7',
      
    },
    secondary: {
      
      main: '#dcdcdc',
      
    },
  },
});


export default function FloatingActionButtonSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <ThemeProvider theme={myTheme}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      </ThemeProvider>

    </Box>
  );
}