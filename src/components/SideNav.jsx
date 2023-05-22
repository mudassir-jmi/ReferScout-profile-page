import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import DashboardIcon from '@mui/icons-material/Dashboard';

import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

function SideNav() {
    const { collapsed } = useProSidebar()
    const theme = useTheme();

    return <Sidebar
        style={{ height: "100%", top: 'auto' }}
        breakPoint="md"
        sx={{backgroundColor:'#ffffff'}}

    >
        <Box sx={styles.avatarContainer}>
            <img src="src/assets/logo-icon.png" />
            <Avatar sx={styles.avatar} alt="logo" src="src/assets/logo.png" />
            {!collapsed ? <Typography variant="body2" sx={styles.yourMargin}>Naresh Meetei</Typography> : null}
            {!collapsed ? <Typography variant="body2" sx={styles.yourMargin}>Edit Profile</Typography> : null}
            {!collapsed ? <Typography variant="body">naresh@referscout.com</Typography> : null}
        </Box>

        <Menu
            menuItemStyles={{
                button: ({ level, active }) => {
                    return {
                        backgroundColor: active ? theme.palette.neutral.medium : undefined,
                    };
                },
            }}>

            <MenuItem active={window.location.pathname === "/"} component={<Link to="/" />} icon={<DashboardIcon />}> <Typography variant="body1">Dashboard</Typography> </MenuItem>
           
        </Menu >
        <Box sx={{mt: 75}}>

        <LogoutIcon />
        <span style={{ marginRight: '60px', marginBottom: '5px' }}>Log out</span>
        </Box>

        
    </Sidebar >;
}

export default SideNav;

/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourMargin: {
        mt: 1
    }

}