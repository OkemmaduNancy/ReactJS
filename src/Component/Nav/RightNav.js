import { message } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

 .pres{
   margin-left: 10px;
   margin-top:10px;
   margin-right:30px;
 }
 .docs{
    margin:10px
 }
  /* .signIn{
    padding-top: 3px;
    border-radius: 10px;
    border-color: rgb(234, 231, 231);
    margin: 5px;
  }
  .signIn:hover{
  background-color: rgb(0, 255, 115);  
  } */
  .logIn{
    padding-top: 3px;
    border-radius: 10px;
    border-color: rgb(227, 223, 223);
    margin: 5px;
  }
  .logIn:hover{
  background-color: rgb(0, 255, 115);
  
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .docs{
      color:#fff;
     }
     .pres{
      color: #fff;
 }
  }
`

const RightNav = ({ open }) => {
  const history = useHistory()

  const logout = () => {
    message.success({
      content: "You are logout ",
      style: {
        marginTop: '10vh',
      },
    }); history.push('/login')
  }
  return (
    <Ul open={open} className="right_header">
          <h3 className="docs">DOCS</h3>
          <h3 className="pres">Presentation</h3>
      {/* <button className="signIn" type="submit" >Sign Up</button> */}
      <button onClick={logout} className="logIn" type="submit">Logout</button>
    </Ul>
  );
};

export default RightNav