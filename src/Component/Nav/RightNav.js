import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
    background-color: #fff;
    padding: 5px;
    position: fixed;
    z-index: 11;
    width: 100%;
    border-bottom: 2px solid lightblue;
    display: flex;
    justify-content: space-between;

    .right_header{
    display: flex;
    justify-content: space-between;
 }
 .pres{
   margin-left: 10px;
   margin-top:10px;
   margin-right:30px;
 }
 .docs{
    margin:10px
 }
  .signIn{
    padding-top: 3px;
    border-radius: 10px;
    border-color: rgb(234, 231, 231);
    margin:10px;

  }
  .signIn:hover{
  background-color: rgb(0, 255, 115);  
  }
  .logIn{
    padding-top: 3px;
    border-radius: 10px;
    border-color: rgb(227, 223, 223);
    margin:10px;
  }
  .logIn:hover{
  background-color: rgb(0, 255, 115);
  
  }
`

const RightNav = () => {
  return (
    <Nav >
      <Burger />
      <nav >
        <div className="right_header">
          <h3 className="docs">DOCS</h3>
          <h3 className="pres">Presentation</h3>
          <button className="signIn" type="submit" >Sing In</button>
          <button className="logIn" type="submit">Log In</button>
        </div>
      </nav>
    </Nav>
  );
};

export default RightNav