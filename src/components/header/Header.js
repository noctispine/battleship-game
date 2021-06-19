import React from 'react';
import {HeaderContainer, Logo} from '../styled-components/headerStyles';
import battleShipLogo from '../../assets/logo/battleship.png'

const Header = () => {
    return (
        <HeaderContainer>
            <Logo src={battleShipLogo}/>
        </HeaderContainer>
    )
}

export default Header
