import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Nav>
      <Logo>
        <img src="../images/logo.svg" alt="logo" />
      </Logo>
      <Menu>
        <ul>
          <li><a href='#'>Model S</a></li>
          <li><a href='#'>Model 3</a></li>
          <li><a href='#'>Model X</a></li>
          <li><a href='#'>Model Y</a></li>
          <li><a href='#'>Solar Roof</a></li>
          <li><a href='#'>Solar Panel</a></li>
        </ul>
      </Menu>
      <RightMenu>
        <ul>
          <li><a href="">Shop</a></li>
          <li><a href="">Account</a></li>
          <li><a href="">Menu</a></li>
        </ul>
        <CustomMenu onClick={()=> setShowMenu(true)} />
      </RightMenu>
      <BurgerNav show={showMenu}>
        <CloseWrapper>
          <CustomClose onClick={()=> setShowMenu(false)}/>
        </CloseWrapper>
        <ul>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-in</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadaster</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Existing Inventory</a></li>
        </ul>
      </BurgerNav>
    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  z-index: 1;
`

const Logo = styled.a`
  cursor: pointer;
`

const Menu = styled.div`

  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    
    li{
      font-weight: 500;
      text-decoration: uppercase;
      padding: 0 10px;
      flex-wrap: no-wrap;
    }
  }

  @media(max-width: 992px){
    display: none;
  }
  
`

const RightMenu = styled(Menu)`
  display: flex;
  align-items: center;
  ul{
    li{
      font-weight: 500;
      text-decoration: uppercase;
      padding: 0 10px;
    }
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  padding: 32px 50px 32px 50px;
  transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.5s;

  ul{
    text-align: left;
    li{
      margin-bottom: 25px;
      font-weight: 500;
      // padding: 15px 0;
      // border-bottom: 1px solid rgba(0, 0, 0, .2);
    }
  }
 
  `
  const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 32px;
  `

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`