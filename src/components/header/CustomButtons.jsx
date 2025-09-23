

import { styled,Box,Typography,Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper = styled(Box)`
    align-items:center;
    display:flex;
    & > button, & > p, & > div {
        margin-right:40px;
        margin-left:10px;
        font-size:15px;       
    }
`

const Container = styled(Box)`
    display:flex;
`

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height:32px
`
const CustomButtons = () => {
    return (
        <Wrapper>
            <LoginButton variant="contained">Login</LoginButton>
            <Typography styled = {{marginTop:3}}>Become a Seller</Typography>
            <Typography styled = {{marginTop:3}}>More</Typography>

            <Container>
                <ShoppingCartIcon/>
                <Typography>Cart</Typography>
            </Container>
        </Wrapper>
    )
}

export default CustomButtons;