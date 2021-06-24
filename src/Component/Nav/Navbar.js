import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
    width: 100%;
  height: 60px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color:#fff;
  z-index: 11;

.checkbox{
    border-radius: 5px;
    border-color: rgb(203, 201, 201);
    margin: 12px;
    z-index: 20;
  }
  .checkbox:hover{
  background-color: rgb(193, 192, 192);
  }
  .aboutUsButton{
    border-radius: 5px;
    border-color: rgb(203, 201, 201); 
    margin-left: 5px;
  }
`

const Navbar = () => {
    const history = useHistory();
    return (
        <Nav>
            <div>
                <select className="checkbox" >
                    <option>Reference</option>
                    <option>Feacture</option>
                    <option>Help</option>
                </select>
                <button onClick={() => history.push("/about-us")} className="aboutUsButton">About Us</button>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar;