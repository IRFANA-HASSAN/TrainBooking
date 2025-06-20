import React from 'react'
import {Link} from 'react-router-dom'
import styled  from 'styled-components'


const Navbar = styled.header`
    background: rgba(66, 124, 249, 0.98);
    margin:0;
    padding:2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Logo =styled.img`
    width:50px;
    height: 50px;
    object-fit: cover;
`;
const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items:center;
    gap:3rem;
`;
const Links = styled(Link)`
    font-size: 18px;
    text-decoration: none;
    color: #fff;

    &:hover{
    color: blue;
    text-decoration: underline;
    }
`;
const Title =styled.h1`
    font-size: 28px;
    font-weight:700;
    margin-bottom:1rem;
    color: white;
    text-decoration:none;
`;
const Container = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <Navbar>
      <Link to='/'><div style={{  textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', }}><Logo src="/icons/logo.png" alt="logo" /><Title>Trackster</Title></div>
      </Link>
      <NavList>
        <Links to="/">Home</Links>
        <Links to="/confirmation">Booking</Links>
        <Links to="/comment">Contact</Links>
      </NavList>
    </Navbar>
  )
}

export default Header
