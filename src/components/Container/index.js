import styled from 'styled-components';

// Common Variables
const paddingLeftRight = props => props.full ? 0 : 'calc((100vw - 960px) / 2)',
      paddingTopBottom = props => {
        if (props.fullVertical) return 0;
        if (props.small) return '15px';
        return '25px';
      };


const Container = styled.div`
  background-color: pink;
  padding: ${paddingTopBottom} ${paddingLeftRight};
`

export default Container;
