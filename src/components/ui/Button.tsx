import React from 'react'
import styled from 'styled-components'


const ButtonModel = styled.button`
    padding:4px 8px;
    border:1px solid #000;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.98);
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`;

const Button = ({label,onClick}) => {
  return (
    <ButtonModel onClick={onClick}>{label}</ButtonModel>
  )
}

export default Button
