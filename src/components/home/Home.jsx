import React,  { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import Slide from './Slide';
import NavBar from './NavBar';
import Banner from './Banner';
import MidSlide from './MidSlide';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts} from '../../redux/actions/productActions';
import MidSection from './MidSection';
const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;

const Home = () => {
    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <NavBar/>
            <Component>
                <Banner/>
                 <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Component>
            
        </>
    )
}

export default Home;