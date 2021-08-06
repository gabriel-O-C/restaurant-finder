import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import { Container, Search, Input, FormContainer, Logo,  Wrapper, CarouselTitle, Carousel } from './styles'
import Restaurant from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map  } from '../../components'
import { useSelector } from 'react-redux';
const Home = () => {
    const [value, setValue] = useState('');
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const [placeId, setPlaceId] = useState(null);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);


    const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    autoplay: true
    };
    const handleChange = (e) => { 
        setValue(e.target.value)
        
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setQuery(value);
        }
    }
    const handleOpenedModal = (placeId) => {
        setPlaceId(placeId);
        setModalOpened(true);
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
                    onClick={() => handleOpenedModal(restaurant.place_id)}
                    restaurant={restaurant}
                    />
                ))}             
                
            </Container>
            <Map query={query} placeId={placeId}/>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} >
            <p>{restaurantSelected?.name}</p>
            <p>{restaurantSelected?.formatted_phone_number}</p>
            <p>{restaurantSelected?.formatted_address}</p>
            </Modal>
        </Wrapper>
           
        
    )
}

export default Home
