import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AddTraining(props) {
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        id: 0,
        date: '',
        duration: 0,
        activity: '',
        customer: ''
    });

    const handleClickOpen = () => {
        setTraining({
            ...training,
            customer: props.row.data.links[0].href
         })
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSave = () => {
        props.addTraining(training);
        handleClose();
    };

    const inputChanged = event => {
        setTraining({...training, [event.target.name]: event.target.value})
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          +
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Training</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="date"
              type="date"
              value={training.date}
              onChange={inputChanged}
              label="Date"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="duration"
              value={training.duration}
              onChange={inputChanged}
              label="Duration"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="activity"
              value={training.activity}
              onChange={inputChanged}
              label="Activity"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

export default AddTraining;