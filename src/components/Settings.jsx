import React, {useState} from 'react'
import { TextField, Box, Button } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import axios from 'axios';

const Settings = () => {
  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const [ARN, setARN] = useState();
  const [operation, setOperation] = useState();
  const theme = useTheme();

  const handleUpdate = async (operation, value) => {
    const input = {[operation]: value}
    try {
      await axios.patch('https://lambdapeeler-675999984030.herokuapp.com/user/changeinfo', input, {withCredentials: true});
      console.log('Update successful')
    } catch(err) {
      console.log(err);
    }

  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          border: '1px solid lightgrey',
          borderRadius: 2,
          p: 5,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          bgcolor: 'white',
          boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, .4)',
          width: '40%',
        }}
      >
        <h2>Update Account Details</h2>
        {/* <div id='update'> */}
        <TextField
          id="outlined-basic1"
          label="Update Username"
          variant="outlined"
          sx={{width: '100%', alignSelf: 'center'}}
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />
        {/* <Button
            onClick={(e) => handleUpdate('username', username)}
            variant="contained"
            sx={{ width: '40%', height: '3.8em', backgroundColor: theme.palette.primary.main, '&:hover': {
              backgroundColor: theme.palette.primary.main
            }}}
            
          >
            Update Username
          </Button>
          </div>
          <div id='update'> */}
        <TextField
          id="outlined-basic2"
          label="Update Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          sx={{width: '100%', alignSelf: 'center'}}
        />
        {/* <Button
            onClick={(e) => handleUpdate('password', password)}
            variant="contained"
            sx={{ width: '40%', height: '3.8em', backgroundColor: theme.palette.primary.main, '&:hover': {
              backgroundColor: theme.palette.primary.main
            }}}
            
          >
            Update Password
          </Button> */}
          {/* </div>
          <div id='update'> */}
            <TextField
            id="outlined-basic3"
            label="Update ARN"
            variant="outlined"
            type="test"
            onChange={(e) => setARN(e.target.value)}
            sx={{width: '100%', alignSelf: 'center'}}
              />
              <Button
                onClick={(e) => handleUpdate('ARN', ARN)}
                variant="contained"
                fullWidth='true'
                sx={{ height: '3em', backgroundColor: theme.palette.primary.main, '&:hover': {
                  backgroundColor: theme.palette.primary.main
                }}}
                
              >
                Submit
          </Button>
        {/* </div> */}
      </Box>
    </div>
  )
}

export default Settings;