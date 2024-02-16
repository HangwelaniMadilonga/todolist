import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FloatingActionButtonSize from './AddTaskButton';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <ThemeProvider theme={myTheme}>
      <Fab size="small" color="secondary" aria-label="add"  onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      </ThemeProvider>

    </Box>
     
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="Title"
            label="Title"
            type="Title"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="Description"
            name="Description"
            label="Description"
            type="Description"
            fullWidth
            multiline
            variant="outlined"
            
          />
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="date"
            name="date"
            type="date"
            variant="standard"
          />

        <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Important" />
        </FormGroup>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Sumbit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
