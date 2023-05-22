import { Box, Card, CardContent, Typography, Button, TextField, Grid, InputAdornment } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function EditProfile(props) {
    return (<Card {...props} sx={{ minWidth: 850, backgroundColor: "#f5f5f5" }}>
        <CardContent display="flex" justifyContent="space-between" alignItems="center">

            <Typography display="flex" justifyContent="space-between" alignItems="center" variant="cardTitle">Personal Information</Typography>

            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box component={'img'} src={'src/assets/logo.png'} />

                 <Button variant="contained" color="primary" sx={{ height: 30 }}>
                    upload 
                </Button>
                <Button variant="contained" color="secondary" sx={{ height: 30 }}>
                    remove 
                </Button>
                <img src="src/assets/logo1.png" alt="" />
                <img src="src/assets/logo2.png" alt="" />
                <img src="src/assets/logo3.png" alt="" />

            </Box>

           <Box sx={{mb: 3}}>
                <Grid container spacing={2} sx={{mb: 3}}>

                    <Grid item xs={12} sm={6}>
                    <TextField label="Naresh" variant="outlined" fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField label="Meetei" variant="outlined" fullWidth />
                    </Grid>

                </Grid>

                <Grid container spacing={2} sx={{mb: 3}}>

                    <Grid item xs={12} sm={6}>
                    <TextField label="naresh@unlimiteddesignz.com" variant="outlined" fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField label="9876543210" variant="outlined" fullWidth />
                    </Grid>

                </Grid>

                <Grid container spacing={2} sx={{mb: 3}}>

                    <Grid item xs={12} sm={6}>
                    <TextField label="EMP006547" variant="outlined" fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField label="Marketing" variant="outlined" fullWidth />
                    </Grid>

                </Grid>

                <Grid container spacing={2} sx={{mb: 3}}>

                <Grid item xs={12} sm={6}>
                    <TextField label="02-15-2022" variant="outlined" fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                 
                        <TextField
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start" style={{ color: 'blue' }}>
                                <LinkedInIcon style={{ marginLeft: '70px' }} />
                                <span style={{ marginRight: '20px' }}>Connect with Linkedin</span>
                            </InputAdornment>
                            ),
                        }} />
                    </Grid>

                </Grid>

           </Box>

        </CardContent>
       
    </Card>);
}

export default EditProfile;


/**
 * @type {import("@mui/material").SxProps}
 */

// const styles = {
//     latestVideoContainer: {
//         width: '100%',
//         height: '100%',
//         position: 'relative'
//     },
   
// }
