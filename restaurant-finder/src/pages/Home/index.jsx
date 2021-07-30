import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import { Container, Search, Input, FormContainer } from '../../styles'
const Home = () => {
    const [inputValue, setInputValue] = useState('Search');

    return (
        <Container>
            <Search>
                <img src={logo} alt="Restaurant logo"/>
                
                <form>
                    <FormContainer>
                        <label htmlFor="search">Search:</label>
                        <Input type="text"
                        value={inputValue}
                        onChange={(e)=> setInputValue(e.target.value)}
                        placeholder='Type the restaurant that you wanna find'
                        >
                        
                        </Input>                    
                    </FormContainer>
                </form>               
            </Search>
        </Container>
    )
}

export default Home
