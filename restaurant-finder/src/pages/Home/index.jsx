import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import { Container, Search, Input, FormContainer, Logo,  Wrapper, CarouselTitle, Carousel } from '../../styles'
import Restaurant from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map  } from '../../components'
const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);


    const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true
    };
    function handleKeyPress(e) {
        if(e.key === 'Enter') {
            setQuery(inputValue);
        }
    }
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
            <Map query={query}/>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
        </Wrapper>
           
        
    )
}

export default Home
