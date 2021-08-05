import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import { Container, Search, Input, FormContainer, Logo, Map, Wrapper, CarouselTitle, Carousel } from '../../styles'
import Restaurant from '../../assets/restaurante-fake.png';
import { Card } from '../../components'
import { RestaurantCard } from '../../components';
const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true
    };

    return (
        
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Restaurant logo"/>                      
                    <form>
                        <FormContainer>
                            <label htmlFor="search">Search:</label>
                            <Input type="text"
                            value={inputValue}
                            onChange={(e)=> setInputValue(e.target.value)}
                            placeholder='Search for a Restaurant'
                            />
                        </FormContainer>
                    </form>   
                    <CarouselTitle>In Your Area</CarouselTitle>    
                    <Carousel {...settings}>
                    <Card photo={Restaurant} title="..."/>
                    <Card photo={Restaurant} title="..."/>
                    <Card photo={Restaurant} title="..."/>
                    <Card photo={Restaurant} title="..."/>
                    <Card photo={Restaurant} title="..."/>
                    <Card photo={Restaurant} title="..."/>
                    <Card photo={Restaurant} title="..."/>
                    <Card photo={Restaurant} title="..."/>

                        
                      

                    </Carousel>        
                </Search>
                <RestaurantCard/>
            </Container>
            <Map/>
        </Wrapper>
           
        
    )
}

export default Home
