import React from 'react'
import styled from 'styled-components'
import CardsContainer from '../components/CardsContainer'
import WindowCard from '../components/WindowCard'

const Container = styled.div`
  width : 100%;
  height : auto;
  padding: 100px 150px;
  /* overflow-y : scroll; */
    @media (max-width: 1080px) {
      padding: 100px 100px;
    }
    @media (max-width: 768px) {
      padding: 100px 50px;
    }
    @media (max-width: 480px) {
      padding: 100px 25px;
    }
`
const About = () => {
  return (
    <Container>
      <CardsContainer />
    </Container>
  )
}

export default About