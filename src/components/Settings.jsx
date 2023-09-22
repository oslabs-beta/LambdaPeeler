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

  // const changeUsername = async () => {
  //   axios.patch('http://localhost:3000/user/changeinfo', {
  //     username: username
  //   })
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  // const changePassword = async () => {
  //   axios.patch('http://localhost:3000/user/changeinfo', {
  //     password: password
  //   })
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  // const changeARN = async () => {
  //   axios.patch('http://localhost:3000/user/changeinfo', {
  //     ARN: ARN
  //   })
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  const handleUpdate = async (operation, value) => {
    const input = {[operation]: value}
    try {
      console.log(input)
      await axios.patch('http://localhost:3000/user/changeinfo', input, {withCredentials: true});
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
          p: 3,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          bgcolor: 'white',
          boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, .4)',
          width: '50%'
        }}
      >
        <div id='update'>
        <TextField
          id="outlined-basic1"
          label="Username"
          variant="outlined"
          sx={{width: '50%', height: '2em', alignSelf: 'center'}}
          inputProps={{style: { textAlign: 'center' }}}
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />
        <Button
            onClick={(e) => handleUpdate('username', username)}
            variant="contained"
            sx={{ mt: 3, mb: 2, width: '50%', backgroundColor: theme.palette.primary.main, '&:hover': {
              backgroundColor: theme.palette.primary.main
            }}}
            
          >
            Update Username
          </Button>
          </div>
          <div id='update'>
        <TextField
          id="outlined-basic2"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          sx={{width: '50%', height: '2em', alignSelf: 'center'}}
        />
        <Button
            onClick={(e) => handleUpdate('password', password)}
            variant="contained"
            sx={{ mt: 3, mb: 2, width: '50%', backgroundColor: theme.palette.primary.main, '&:hover': {
              backgroundColor: theme.palette.primary.main
            }}}
            
          >
            Update Password
          </Button>
          </div>
          <div id='update'>
            <TextField
            id="outlined-basic3"
            label="ARN"
            variant="outlined"
            type="test"
            onChange={(e) => setARN(e.target.value)}
            sx={{width: '100%', height: '2em', alignSelf: 'center'}}
              />
              <Button
                onClick={(e) => handleUpdate('ARN', ARN)}
                variant="contained"
                sx={{ mt: 3, mb: 2, width: '100%', backgroundColor: theme.palette.primary.main, '&:hover': {
                  backgroundColor: theme.palette.primary.main
                }}}
                
              >
                Update ARN
          </Button>
        </div>
      </Box>
    </div>
  )
}

export default Settings;