import {Box, Typography, useTheme, useMediaQuery} from "@mui/material";
import Form from "./Form"
const LoginPage =()=>{
    const theme=useTheme();
    const isNonMobileScreen= useMediaQuery("(min-width:1000px)");
    return(
        <Box>
            <Box
            width= "100%"
            backgroundColor={theme.palette.background.alt}
            p="1rem 6%"
            textAllign="center"
            >
                <Typography fontWeight="bold" fontSize="32px" color="primary">
                    Spciopedia
                </Typography>
            </Box>

            <Box
            width={isNonMobileScreens ? "50%": "93%"}
            p="2rem"
            m="2rem auto"
            BorderRadius="1.5 rem"
            backgroundColor={theme.palette.background.alt}
            >
                <Typography fontWeight="500" variant ="h5" sx={{mb:"1.5rem"}}>
                    Welcome to Socipedia, the Social Media for Sociopaths!
                </Typography>
                <From/>
                </Box>
                </Box>
    )
}

export default LoginPage;