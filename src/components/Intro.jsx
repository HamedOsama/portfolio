import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/profile-img.png'
const Container = styled(motion.div)`
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  width: 65vw;
  height: 55vh;
  display: flex;

  background: 
  linear-gradient(
    to right ,
    ${props => props.theme.body} 50% ,
    ${props => props.theme.text} 50% ) bottom,
    linear-gradient(
    to right ,
    ${props => props.theme.body} 50% ,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index: 100;
`
const Info = styled.div`
  flex: 1;
  position: relative;
  display: flex;

`
const Text = styled.div`
  font-size: calc(1rem + 1.5vw);
  color: ${props => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .bio{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size : calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

`
const ImgContainer = styled(motion.div)`
  position: relative;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
const Image = styled.img`
  max-width: 100%;
  height: auto;
  position: absolute;
`
const Intro = () => {
  return (
    <Container
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <Info >
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Hamed Osama</h3>
          <h6 className='bio'>I'm FullStack Developer</h6>
        </Text>
      </Info>
      <ImgContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Image src={Me} alt="profile" />
      </ImgContainer>
    </Container>
  )
}

export default Intro