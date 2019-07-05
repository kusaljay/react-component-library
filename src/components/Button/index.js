import React from 'react';
import styled, {css} from 'styled-components';
import Loader from '../Loader/';

const StyledButton = styled.button`
  border-radius: 3px;
  color: #fff;
  padding: 10px 15px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 15px;
  background-color: ${props => (props.secondary ? '#F7A072' : '#a1cdf1')};
  &:hover {
    background-color: ${props => (props.secondary ? 'red' : 'blue')};
  }
  font-size: ${props => (props.big ? '20px' : '16px')};
  
  ${props => {
    return (
      props.inverse && 
      css` 
        background-color: #fff; 
        color: #a1cdf1;
        border: 1px solid #a1cdf1;
      `
    )
  }}
`

const Button = ({secondary, big, inverse, loading, children, ...props}) => {
  return (
    <StyledButton secondary={secondary} big={big} inverse={inverse} {...props}>
      {loading ? <Loader white /> : children}
    </StyledButton>
  )
}

export default Button;