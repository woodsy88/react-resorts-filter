import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';
const purple = '#150255';


const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${props => props.images ? props.images : defaultImg}) center no-repeat;
  
  display:flex;
  align-items: center;
  justify-content: center;
  color: red;
  background-color: ${purple};

`;

export default StyledHero;