import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-wrap: ${props => {
    if (props.wrapReverse) return 'wrap-reverse'
    if (props.noWrap) return 'nowrap'
    return 'wrap'
  }};
  justify-content: ${props => {
    if(props.justifyContent) return props.justifyContent
    if(props.justifyCenter) return 'center'
    if(props.justifyAround) return 'space-around'
    if(props.justifyBetween) return 'space-between'
    if(props.justifyEnd) return 'flex-end'
    return 'flex-start'
  }};
  align-items: ${props => {

  }};
  align-content: ${props => {

  }};
  flex-direction: ${props => {

  }};

`

export default Flex;