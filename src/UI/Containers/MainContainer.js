import styled from "styled-components";

const MainContainer = styled.div`
  background-color: ${props => props.theme.body};
  width : 100vw;
  height : 100vh;
  position: relative;
  overflow:hidden;
  h2,h3,h4,h5,h6{
    font-family: 'Karla',sans-serif;
    font-weight: 500;
  }
`

export default MainContainer;