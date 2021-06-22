import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Dropdown = styled.div`
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

const Checkbox = () => {
    const history = useHistory();
    return (
        <Dropdown>


            <div>
                <select className="checkbox" >
                    <option>Reference</option>
                    <option>Feacture</option>
                    <option>Help</option>
                </select>
                <button onClick={() => history.push("/about-us")} className="aboutUsButton">About Us</button>
            </div>
        </Dropdown>
    )
}

export default Checkbox;