import React from 'react'
import { Box, TextField, Typography, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, FormGroup, Checkbox} from '@mui/material';

const ContactUs = () => {

    const [subject, setSubject] = React.useState('');
    const [acceptInc, setAcceptInc] = React.useState(false);
    const [acceptInc2, setAcceptInc2] = React.useState(false);
    const [displaybox, setDisplayBox] = React.useState("none");

    const handleChange = (event) => {
        setSubject(event.target.value);
    };

    const checkhandler = () => {
        setAcceptInc(!acceptInc)
    };

    const checkhandler2 = () => {
        if(acceptInc2){
            setDisplayBox("none")
            setAcceptInc2(!acceptInc2)
        }
        else{
            setAcceptInc2(!acceptInc2)
            setDisplayBox("block")
        }
        
    };


  return (
    <>
      <div className='contact-us'>
        <form>
            <Box display="flex" flexDirection="column" maxWidth={800} alignItems="center" justifyContent="center"
            margin="auto" marginTop={5} marginBottom={5} padding={3} borderRadius={5} boxShadow={"5px 5px 10px #ccc"}
            sx={{
                backgroundColor:"#F5F5F5",
                ":hover":{
                    boxShadow:"10px 10px 20px #ccc"
                },
            }}>
                <div>
                <Typography variant='h4' padding={3} textAlign="center">GET IN TOUCH</Typography>
                <Typography variant='h6' padding={3} textAlign="center">Fill out the form below to ask for help or request information.</Typography>
                <TextField required sx={{width:500}} margin='normal' type={"text"} variant='outlined' placeholder='First Name'></TextField>
                <TextField required sx={{width:500}} margin='normal' type={"text"} variant='outlined' placeholder='Last Name'></TextField>
                <TextField required sx={{width:500}} margin='normal' type={"email"} variant='outlined' placeholder='Email'></TextField>
                <TextField required sx={{width:500}} margin='normal' type={"text"} variant='outlined' placeholder='Phone'></TextField>
                <FormControl sx={{width:500}} margin='normal'>
                    <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={subject}
                        label="Subject"
                        onChange={handleChange}
                    >
                        <MenuItem value={10} disabled>Subject</MenuItem>
                        <MenuItem value={20}>G1 Knowledge Preparation Course</MenuItem>
                        <MenuItem value={30}>G1 Knowledge Practice Tests</MenuItem>
                        <MenuItem value={40}>Online BDE Course</MenuItem>
                        <MenuItem value={50}>G2/G in-car lessons</MenuItem>
                        <MenuItem value={60}>Road Test</MenuItem>
                        <MenuItem value={70}>Payment</MenuItem>
                        <MenuItem value={80}>Other</MenuItem>
                    </Select>
                </FormControl>
                
                <TextField
                   sx={{width:500,marginBottom:3}} 
                   margin='normal'
                   id="outlined-multiline-static"
                   label="Description"
                   multiline
                   rows={8}
                   defaultValue="Message"
                />
                </div>
                
                <div>
                <FormGroup margin="normal" row sx={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
                    <FormControlLabel control={<Checkbox />} label="" checked={acceptInc} onChange={checkhandler}/>    
                    <p style={{fontSize:20,fontWeight:"bold"}}>I want to buy a new service</p>
                </FormGroup>

                <FormGroup margin="normal" row sx={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
                    <FormControlLabel control={<Checkbox />} label="" checked={acceptInc2} onChange={checkhandler2}/>    
                    <p style={{fontSize:20,fontWeight:"bold"}}>I need support for the existing service</p>
                </FormGroup>

                <TextField fullWidth
                    sx={{marginBottom:3,marginTop:3,display:displaybox}} 
                    id="outlined-multiline-flexible"
                    multiline
                    maxRows={4}
                    defaultValue="Severity of your inquiry"
                />
                </div>
                



                <Button sx={{marginTop:3,borderRadius:3}} variant="contained" color="warning">
                    SUBMIT
                </Button>

            </Box>
        </form>
      </div>
    </>
  )
}

export default ContactUs
