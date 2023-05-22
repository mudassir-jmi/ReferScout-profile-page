import { Box, Button,Typography } from "@mui/material";
import EditProfile from "../components/EditProfile";
import ResetPass from "../components/ResetPass";

function Dashboard() {
    return <Box>
        <Typography display='flex' justifyContent='flex-end' alignItems='flex-end' sx={styles.pageTitle} variant="h5">Edit Profile</Typography>
        <Box m={1} sx={{mb: 2}} display='flex' justifyContent='flex-end' alignItems='flex-end'>
          <Button variant="contained" color="primary" sx={{height: 40}}>Refer Now</Button>
        </Box>


        <Box sx={styles.columnsContainer}>

            <EditProfile sx={styles.item} />
           
        </Box>
         
        <Box sx={styles.columnsContainer}>

            <ResetPass sx={styles.item} />
           
        </Box>
        
    </Box>;
}

export default Dashboard;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    pageTitle: {
        mb: 2,
        mr: 95
    },
    columnsContainer: {
        columns: '280px 3',
        maxWidth: 1400,
        mb: 4,
        borderRadius: '10px'
    },
    item: {
        mb: 2,
    },
   
}
