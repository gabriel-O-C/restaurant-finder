import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import  Restaurante  from '../../assets/restaurante-fake.png';
const RestaurantCard = () => <Restaurant>
                                <RestaurantInfo>
                                    <Title>Nome do meu restaurante</Title>
                                    <ReactStars count={5} isHalf activeColor="#e7711c" edit={false} value={4}></ReactStars>
                                    <Address>endereco da minha casa.jpg</Address>
                                </RestaurantInfo>
                                <RestaurantPhoto src={Restaurante} alt="restaurant pic" />
                            </Restaurant>

export default RestaurantCard;