import { Box, Card, CardContent, Typography,TextField, Grid } from "@mui/material";

function ResetPass(props) {
    return (<Card {...props} sx={{ minWidth: 850 }}>
        <CardContent display="flex" justifyContent="space-between" alignItems="center">

            <Typography display="flex" justifyContent="space-between" 
            alignItems="center" variant="cardTitle">Change Password</Typography>


           <Box sx={{mb: 3}}>
                <Grid container spacing={2} sx={{mb: 3}}>

                    <Grid item xs={12} sm={6}>
                    <TextField label="..........." type="password" variant="outlined" fullWidth />
                    </Grid>

                </Grid>

                <Grid container spacing={2} sx={{mb: 3}}>

                    <Grid item xs={12} sm={6}>
                    <TextField label="..........." type="password" variant="outlined" fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <TextField label="..........." type="password" variant="outlined" fullWidth />
                    </Grid>
                    
                    
                </Grid>

           </Box>

        </CardContent>
       
    </Card>);
}

export default ResetPass;


