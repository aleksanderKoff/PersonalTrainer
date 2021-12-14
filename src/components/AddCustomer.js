import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AddCustomer(props) {
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    });

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSave = () => {
        props.addCustomer(customer);
        handleClose();
    };

    const inputChanged = event => {
        setCustomer({...customer, [event.target.name]: event.target.value})
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          New Customer
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New Customer</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="firstname"
              value={customer.firstname}
              onChange={inputChanged}
              label="First Name"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="lastname"
              value={customer.lastname}
              onChange={inputChanged}
              label="Last Name"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="streetaddress"
              value={customer.streetaddress}
              onChange={inputChanged}
              label="Address"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="postcode"
              value={customer.postcode}
              onChange={inputChanged}
              label="Postcode"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="city"
              value={customer.city}
              onChange={inputChanged}
              label="City"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="email"
              value={customer.email}
              onChange={inputChanged}
              label="Email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              name="phone"
              value={customer.phone}
              onChange={inputChanged}
              label="Phone Number"
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

export default AddCustomer;