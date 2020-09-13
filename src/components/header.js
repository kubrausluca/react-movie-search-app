import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const DEFAULT_LOGO = "https://www.flaticon.com/svg/static/icons/svg/3039/3039530.svg";

const Header = ()=>{
	return(
		<>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src= {DEFAULT_LOGO}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Movie Search App
            </Navbar.Brand>
        </Navbar>
        </>
	)
}

export default Header;