import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import { Container, Search, Input, FormContainer, Logo,  Wrapper, CarouselTitle, Carousel } from '../../styles'
import Restaurant from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map  } from '../../components'
import { useSelector } from 'react-redux';
const Home = () => {
    const [value, setValue] = useState('');
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const { restaurants } = useSelector((state) => state.restaurants);


    const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true
    };
    const handleChange = (e) => { 
        setValue(e.target.value)
        
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setQuery(value);
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
                            value={value}
                            onChange={handleChange}
                            placeholder='Search for a Restaurant'
                            onKeyPress={handleKeyPress}
                            />
                        </FormContainer>
                    </form>   
                    <CarouselTitle>In Your Area</CarouselTitle>    
                    <Carousel {...settings}>
                    {restaurants.map((restaurant) => (
                        <Card
                            key={restaurant ? restaurant.place_id : Symbol()}
                            photo={restaurant ? restaurant.photos[0].getUrl() : Restaurant}
                            title={restaurant ? restaurant.name : 'no name'}
                        />
                    ))}
                  
                    </Carousel>      
                </Search>
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                    key={restaurant.place_id} 
                    restaurant = {restaurant} />
                ))}              
                <RestaurantCard/>
            </Container>
            <Map query={query}/>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
        </Wrapper>
           
        
    )
}

export default Home
