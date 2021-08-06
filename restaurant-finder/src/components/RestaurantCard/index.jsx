import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import  Restaurante  from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant, onClick }) => (
    
    <Restaurant onClick={onClick}>
        <RestaurantInfo>
            <Title>{restaurant ? restaurant.name : 'no name available'}</Title>
            <ReactStars count={5} isHalf value={restaurant ? restaurant.rating : ''} edit={false} activeColor={"#e7711c"} />
            <Address>{restaurant ? restaurant.vicinity || restaurant.formated_addres : 'no address available'}</Address>
            <RestaurantPhoto src={ restaurant ? restaurant.photos[0].getUrl() || Restaurante : ''  } alt='restaurant pic'/>
        </RestaurantInfo>
    </Restaurant>
);
export default RestaurantCard;